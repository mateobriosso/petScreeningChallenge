import { test, expect } from "@playwright/test";
import hooks from '../utils/hooks';
import pages from '../utils/pages';
import AdvancedTablePage from "../pages/advanced-table.page";

let advTablePage: AdvancedTablePage;
const uniName = 'University of Oxford';
const uniWeb = 'https://www.ox.ac.uk/';
const uniNumber = '22';

test.describe("Controls Automation - Advanced Table", () => {
  test.beforeEach(async ({ page }) => {
    advTablePage = await hooks.beforeEach(page, AdvancedTablePage, pages.advancedTablePage);
  });
  test("Sorting universities by number, name, website", async () => {
    //Check if ordered by number asc
    let universityNumbers = await advTablePage.tblUniversityNumbers.allTextContents();
    expect(advTablePage.checkSortedArrayAsc(universityNumbers)).toBeTruthy();
    //Check if ordered by number desc
    await advTablePage.tblHdNumber.click();
    universityNumbers = await advTablePage.tblUniversityNumbers.allTextContents();
    expect(advTablePage.checkSortedArrayDesc(universityNumbers)).toBeTruthy();
    //Check if ordered by name adc
    await advTablePage.tblHdName.click();
    let universityNames = await advTablePage.tblUniversityNames.allTextContents();
    expect(advTablePage.checkSortedArrayAsc(universityNames)).toBeTruthy();
    //Check if ordered by name desc
    await advTablePage.tblHdName.click();
    universityNames = await advTablePage.tblUniversityNames.allTextContents();
    expect(advTablePage.checkSortedArrayDesc(universityNames)).toBeTruthy();
    //Check if ordered by website adc
    await advTablePage.tblHdWeb.click();
    let universityWebsites = await advTablePage.tblUniversityWebsites.allTextContents();
    expect(advTablePage.checkSortedArrayAsc(universityWebsites)).toBeTruthy();
    //Check if ordered by website desc
    await advTablePage.tblHdWeb.click();
    universityWebsites = await advTablePage.tblUniversityWebsites.allTextContents();
    expect(advTablePage.checkSortedArrayDesc(universityWebsites)).toBeTruthy();

  });
  test("Show 5, 10, 25 entries", async () => {
    //Check table starts with 5 entries
    await expect(advTablePage.tblRows).toHaveCount(5);
    await expect(advTablePage.lblEntries).toContainText('Showing 1 to 5');
    //Check table has 10 entries
    await advTablePage.slEntries.selectOption('10');
    await expect(advTablePage.tblRows).toHaveCount(10);
    await expect(advTablePage.lblEntries).toContainText('Showing 1 to 10');
    //Check table has 25 entries
    await advTablePage.slEntries.selectOption('25');
    await expect(advTablePage.tblRows).toHaveCount(25);
    await expect(advTablePage.lblEntries).toContainText('Showing 1 to 25');
    
  });
  test("Go through content by pagination", async () => {
    await advTablePage.slEntries.selectOption('10');
    for(let i = 1; i <= 5; i++){
      if(Number(await advTablePage.btnCurrent.textContent()) === 1){
        let disabledButtons = await advTablePage.lstDisabledButtons.allTextContents();
        expect(disabledButtons).toContain('First');
        expect(disabledButtons).toContain('Previous');
      }
      if(Number(await advTablePage.btnCurrent.textContent()) === 2 ||
        Number(await advTablePage.btnCurrent.textContent()) === 3 ||
        Number(await advTablePage.btnCurrent.textContent()) === 4 ){
          let disabledButtons = await advTablePage.lstDisabledButtons.allTextContents();
          expect(disabledButtons).not.toContain('First');
          expect(disabledButtons).not.toContain('Previous');
          expect(disabledButtons).not.toContain('Next');
          expect(disabledButtons).not.toContain('Last');
      }
      if(Number(await advTablePage.btnCurrent.textContent()) === 5){
        await expect(advTablePage.tblRows).toHaveCount(7);
        let disabledButtons = await advTablePage.lstDisabledButtons.allTextContents();
        expect(disabledButtons).toContain('Next');
        expect(disabledButtons).toContain('Last');
      }else{
        await expect(advTablePage.tblRows).toHaveCount(10);
        await advTablePage.btnNext.click();
      }
    }
    await advTablePage.btnPrevious.click();
    await expect(Number(await advTablePage.btnCurrent.textContent())).toBe(4);
    await advTablePage.btnFirst.click();
    await expect(Number(await advTablePage.btnCurrent.textContent())).toBe(1);
    let disabledButtons = await advTablePage.lstDisabledButtons.allTextContents();
    expect(disabledButtons).toContain('First');
    expect(disabledButtons).toContain('Previous');
    await advTablePage.btnLast.click();
    disabledButtons = await advTablePage.lstDisabledButtons.allTextContents();
    expect(disabledButtons).toContain('Next');
    expect(disabledButtons).toContain('Last');
    
  });
  test("Search university by name, URL, number", async () => {
    await advTablePage.txtSearch.fill(uniNumber);
    let result = await advTablePage.tblRows.allTextContents();
    await expect(advTablePage.tblRows).toHaveCount(1);
    expect(result.toString()).toContain(uniNumber);
    expect(result.toString()).toContain(uniName);
    expect(result.toString()).toContain(uniWeb);

    await advTablePage.txtSearch.fill(uniName);
    result = await advTablePage.tblRows.allTextContents();
    await expect(advTablePage.tblRows).toHaveCount(1);
    expect(result.toString()).toContain(uniNumber);
    expect(result.toString()).toContain(uniName);
    expect(result.toString()).toContain(uniWeb);

    await advTablePage.txtSearch.fill(uniWeb);
    result = await advTablePage.tblRows.allTextContents();
    await expect(advTablePage.tblRows).toHaveCount(1);
    expect(result.toString()).toContain(uniNumber);
    expect(result.toString()).toContain(uniName);
    expect(result.toString()).toContain(uniWeb);

  });

});
