import { test, expect } from "@playwright/test";
import TestPage from "../pages/test.page";
import hooks from '../utils/hooks';
import pages from '../utils/pages';

let testPage: TestPage;

test.describe("Controls Automation Tests", () => {
  test.beforeEach(async ({ page }) => {
    testPage = await hooks.beforeEach(page, TestPage, pages.testPage);
  });
  test("Test Test 1", async ({ page }) => {
    
    
  });

});
