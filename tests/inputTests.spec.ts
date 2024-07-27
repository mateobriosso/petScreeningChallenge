import { test, expect } from "@playwright/test";
import hooks from '../utils/hooks';
import pages from '../utils/pages';
import InputPage from "../pages/input.page";

let inputPage: InputPage;

test.describe("Controls Automation Tests", () => {
  test.beforeEach(async ({ page }) => {
    inputPage = await hooks.beforeEach(page, InputPage, pages.inputPage);
  });
  test("Input Test 1", async ({ page }) => {
    
    
  });

});
