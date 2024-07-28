import { test, expect } from "@playwright/test";
import hooks from '../utils/hooks';
import pages from '../utils/pages';
import DragPage from "../pages/drag.page";

let dragPage: DragPage;

test.describe("Controls Automation - Draggable", () => {
  test.beforeEach(async ({ page }) => {
    dragPage = await hooks.beforeEach(page, DragPage, pages.dragPage);
  });
  test("Drag and Drop to specific target", async () => {
    const boundaryBox = await dragPage.squareBoundary.boundingBox();
    const box = await dragPage.squareDrag.boundingBox();
    await dragPage.squareDrag.hover();
    await dragPage.page.mouse.down();
    await dragPage.page.mouse.move(boundaryBox.width+100, boundaryBox.height+150, {steps:5});
    await dragPage.page.mouse.up();
    const movedBox = await dragPage.squareDrag.boundingBox();
    console.log("Initial coordenates: x: " + box?.x + " - y: "+ box?.y + " => Final coordenates: x: " + movedBox?.x + " - y: " + movedBox?.y);
    expect(box).not.toEqual(movedBox);
  });

});
