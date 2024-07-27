import { test, expect } from "@playwright/test";
import hooks from '../utils/hooks';
import pages from '../utils/pages';
import TablePage from "../pages/table.page";

let tablePage: TablePage;

test.describe("Controls Automation Tests", () => {
  test.beforeEach(async ({ page }) => {
    tablePage = await hooks.beforeEach(page, TablePage, pages.tablePage);
  });
  test("Table Test 1", async ({ page }) => {
    
    
  });

});
