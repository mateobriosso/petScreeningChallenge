import { test, expect } from "@playwright/test";
import hooks from '../utils/hooks';
import pages from '../utils/pages';
import ButtonPage from "../pages/button.page";

let buttonPage: ButtonPage;

test.describe("Controls Automation Tests", () => {
  test.beforeEach(async ({ page }) => {
    buttonPage = await hooks.beforeEach(page, ButtonPage, pages.buttonPage);
  });
  test("Button Test 1", async ({ page }) => {
    
    
  });

});
