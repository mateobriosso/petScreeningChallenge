import { test, expect } from "@playwright/test";
import hooks from '../utils/hooks';
import pages from '../utils/pages';
import ButtonPage from "../pages/button.page";

let buttonPage: ButtonPage;

test.describe("Controls Automation - Button", () => {
  test.beforeEach(async ({ page }) => {
    buttonPage = await hooks.beforeEach(page, ButtonPage, pages.buttonPage);
  });
  test("Click Home button and navigate back", async () => {
    await buttonPage.btnGoToHome.click();
    await buttonPage.page.goBack();
    await expect(buttonPage.btnGoToHome).toBeVisible();
    
  });
  test("Find button position", async () => {
    const box = await buttonPage.btnFindLocation.boundingBox();
    expect(box).toBeTruthy();
    console.log('X: '+box?.x + ', Y: '+box?.y);
    
  });
  test("Find button color", async () => {
    const color = await buttonPage.btnFindColor.evaluate( e => getComputedStyle(e).color);
    console.log(color);
    await expect(buttonPage.btnFindColor).toHaveCSS('color', color);
    
  });
  test("Find button dimensions", async () => {
    const box = await buttonPage.btnDimension.boundingBox();
    expect(box).toBeTruthy();
    console.log('Height: '+box?.height + ', Width: '+box?.width);
    
  });
  test("Check button is disabled", async () => {
    await expect(buttonPage.btnDisabled).toBeDisabled();
    
  });
  test("Click button and hold", async () => {
    await buttonPage.btnHold.click({ delay: 1000 });
    await expect(buttonPage.btnHold).toHaveText('Button has been long pressed');
  });

});
