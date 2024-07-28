import { test, expect } from "@playwright/test";
import TestPage from "../pages/test.page";
import hooks from '../utils/hooks';
import pages from '../utils/pages';
import pageUrls from "../utils/pageUrls";

let testPage: TestPage;

test.describe("Controls Automation Tests", () => {
  test.beforeEach(async ({ page }) => {
    testPage = await hooks.beforeEach(page, TestPage, pages.testPage);
  });
  test("Click controls and check URLs", async ({ baseURL}) => {
    await testPage.clickInput();
    await expect(testPage.page).toHaveURL(baseURL.concat(pageUrls.input));
    await testPage.page.goBack();
    await testPage.clickButton();
    await expect(testPage.page).toHaveURL(baseURL.concat(pageUrls.button));
    await testPage.page.goBack();
    await testPage.clickSelect();
    await expect(testPage.page).toHaveURL(baseURL.concat(pageUrls.select));
    await testPage.page.goBack();
    await testPage.clickDrag();
    await expect(testPage.page).toHaveURL(baseURL.concat(pageUrls.drag));
    await testPage.page.goBack();
    await testPage.clickTable();
    await expect(testPage.page).toHaveURL(baseURL.concat(pageUrls.table));
    await testPage.page.goBack();
    await testPage.clickAdvancedTable();
    await expect(testPage.page).toHaveURL(baseURL.concat(pageUrls.advTable));
    
  });

});
