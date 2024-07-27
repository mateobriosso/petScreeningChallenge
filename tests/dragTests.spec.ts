import { test, expect } from "@playwright/test";
import hooks from '../utils/hooks';
import pages from '../utils/pages';
import DragPage from "../pages/drag.page";

let dragPage: DragPage;

test.describe("Controls Automation Tests", () => {
  test.beforeEach(async ({ page }) => {
    dragPage = await hooks.beforeEach(page, DragPage, pages.dragPage);
  });
  test("Drag Test 1", async ({ page }) => {
    
    
  });

});
