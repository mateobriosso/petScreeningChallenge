import { test, expect } from "@playwright/test";
import hooks from '../utils/hooks';
import pages from '../utils/pages';
import SelectPage from "../pages/select.page";

let selectPage: SelectPage;

test.describe("Controls Automation - Dropdown", () => {
  test.beforeEach(async ({ page }) => {
    selectPage = await hooks.beforeEach(page, SelectPage, pages.selectPage);
  });
  test("Single element selection", async () => {
    await selectPage.slFruits.selectOption('Apple');
    await expect(selectPage.pSubtitle).toHaveText('You have selected Apple');
    
  });
  test("Multiple element selection", async () => {
    const heroesSelected = await selectPage.slSuperheroes.selectOption(['Guardians of the Galaxy', 'Aquaman', 'Superman', 'Batman', 'Thor']);
    console.log(heroesSelected);
    await expect(selectPage.slSuperheroes).toHaveValues(heroesSelected);
  });
  test("Select last language (C#) and print all", async () => {
    await selectPage.slLanguages.selectOption('C#');
    console.log((await selectPage.slLanguages.locator('option').allTextContents()))
    await expect(selectPage.slLanguages).toHaveValue('sharp');
  });
  test("Select India using value & print selected value", async () => {
    console.log(await selectPage.slCountries.selectOption({label: 'India'}));
    await expect(selectPage.slCountries).toHaveValue('India');
    
  });
});