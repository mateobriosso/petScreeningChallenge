import { test, expect } from "@playwright/test";
import hooks from '../utils/hooks';
import pages from '../utils/pages';
import MultiSelectPage from "../pages/multiSelect.page";

let multiSelectPage: MultiSelectPage;
let arrSelected = [
  'Selenium',
  'Protractor',
  'Appium',
  'TestNg',
  'Postman',
  'Cypress',
  'Webdriver.io',
  'Testproject.io',
  'LetCode'
];

test.describe("Controls Automation - MultiSelect", () => {
  test.beforeEach(async ({ page }) => {
    multiSelectPage = await hooks.beforeEach(page, MultiSelectPage, pages.multiSelectPage);
  });
  test("Selection of all elements manual approach", async () => {
    await multiSelectPage.optSelenium.hover();
    await multiSelectPage.page.keyboard.down('Control');
    await multiSelectPage.page.mouse.down();
    const target = await multiSelectPage.optLetCode.boundingBox();
    await multiSelectPage.page.mouse.move(target?.x + target?.width/2, target?.y + target?.height/2, {steps:5});
    await multiSelectPage.page.mouse.up();
    await multiSelectPage.page.keyboard.up('Control');
    const allSelected = await multiSelectPage.lstSelected.all();
    let arr = [];
    for(const elem of allSelected) arr.push(await elem.textContent());
    console.log(arr);
    expect(arr).toEqual(arrSelected);
  });
  test("Selection of all elements with DragTo", async () => {
    await multiSelectPage.optSelenium.dragTo(multiSelectPage.optLetCode);
    const allSelected = await multiSelectPage.lstSelected.all();
    let arr = [];
    for(const elem of allSelected) arr.push(await elem.textContent());
    console.log(arr);
    expect(arr).toEqual(arrSelected);
  });
  
});
