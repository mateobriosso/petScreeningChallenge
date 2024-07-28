import { test, expect } from "@playwright/test";
import hooks from '../utils/hooks';
import pages from '../utils/pages';
import TablePage from "../pages/table.page";

let tablePage: TablePage;

test.describe("Controls Automation - Table", () => {
  test.beforeEach(async ({ page }) => {
    tablePage = await hooks.beforeEach(page, TablePage, pages.tablePage);
  });
  
  test("Add all the prices and check if the total is correct", async () => {
    const rowsCount = await tablePage.tblPricesBody.locator("tr").count();
    expect(rowsCount).toBe(4);
    const currentTotal = await tablePage.tblPricesTotal.textContent();
    let total = 0;
    for (let i = 0; i < rowsCount; i++){
      const row = tablePage.tblPricesBody.locator("tr").nth(i);
      const price = await row.locator("td").last().textContent();
      total += Number(price);
    }
    expect(total).toBe(Number(currentTotal));
    
  });
  test("Mark Raj as present", async () => {
    await tablePage.checkRajCheckbox();
    await expect(tablePage.chkRaj).toBeChecked();

  });
  test("Check if the sorting is working properly", async () => {
    const dessertData = await tablePage.tblColDataDesserts.allTextContents();
    dessertData.sort();
    await tablePage.tblHdDessert.click();
    let sortedDessertData = await tablePage.tblColDataDesserts.allTextContents();
    expect(sortedDessertData).toEqual(dessertData);
    await tablePage.tblHdDessert.click();
    sortedDessertData = await tablePage.tblColDataDesserts.allTextContents();
    dessertData.reverse();
    expect(sortedDessertData).toEqual(dessertData);

  });

});
