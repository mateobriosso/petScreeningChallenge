import { test, expect } from "@playwright/test";
import hooks from '../utils/hooks';
import pages from '../utils/pages';
import AdvancedTablePage from "../pages/advanced-table.page";

let advTablePage: AdvancedTablePage;

test.describe("Controls Automation Tests", () => {
  test.beforeEach(async ({ page }) => {
    advTablePage = await hooks.beforeEach(page, AdvancedTablePage, pages.advancedTablePage);
  });
  test("Advanced Table Test 1", async ({ page }) => {
    
    
  });

});
