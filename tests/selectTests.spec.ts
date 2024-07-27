import { test, expect } from "@playwright/test";
import hooks from '../utils/hooks';
import pages from '../utils/pages';
import SelectPage from "../pages/select.page";

let selectPage: SelectPage;

test.describe("Controls Automation Tests", () => {
  test.beforeEach(async ({ page }) => {
    selectPage = await hooks.beforeEach(page, SelectPage, pages.selectPage);
  });
  test("Select Test 1 - Single element selection", async ({ page }) => {
    
    
  });
  test("Select Test 2 - Multiple element selection with CTRL key", async ({ page }) => {
    
    
  });
  test("Select Test 3 - Multiple element selection with LEFT MOUSE button", async ({ page }) => {
    
    
  });
  
});
