import { type Page, type Locator , expect } from '@playwright/test';

export default class AdvancedTablePage {
  readonly page: Page;
  readonly tblUniversities: Locator;
  readonly tblRows: Locator;
  readonly tblUniversityNumbers: Locator;
  readonly tblUniversityNames: Locator;
  readonly tblUniversityWebsites: Locator;
  readonly slEntries: Locator;
  readonly tblHdNumber: Locator;
  readonly tblHdName: Locator;
  readonly tblHdWeb: Locator;
  readonly lblEntries: Locator;
  readonly btnFirst: Locator;
  readonly btnPrevious: Locator;
  readonly btnNext: Locator;
  readonly btnLast: Locator;
  readonly btnCurrent: Locator;
  readonly lstNumberButtons: Locator;
  readonly lstDisabledButtons: Locator;
  readonly txtSearch: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tblUniversities = page.locator('#advancedtable');
    this.tblRows = this.tblUniversities.locator('tbody tr');
    this.tblUniversityNumbers = this.tblRows.locator('td:first-child');
    this.tblUniversityNames = this.tblRows.locator('td:nth-child(2)');
    this.tblUniversityWebsites = this.tblRows.locator('td:last-child');
    this.slEntries = page.locator('select[name="advancedtable_length"]');
    this.tblHdNumber = page.locator('th.sorting:first-child');
    this.tblHdName = page.locator('th.sorting:nth-child(2)');
    this.tblHdWeb = page.locator('th.sorting:last-child');
    this.lblEntries = page.locator('#advancedtable_info');
    this.btnFirst = page.locator('#advancedtable_first');
    this.btnPrevious = page.locator('#advancedtable_previous');
    this.btnNext = page.locator('#advancedtable_next');
    this.btnLast = page.locator('#advancedtable_last');
    this.btnCurrent = page.locator('span a.current');
    this.lstNumberButtons = page.locator('span a.paginate_button');
    this.lstDisabledButtons = page.locator('a.disabled');
    this.txtSearch = page.locator('#advancedtable_filter input');

  }

  checkSortedArrayAsc(arr){
    for (let i = 0; i < arr.length; i++){
      if(arr[i] > arr[i + 1]){
        return false;
      }
    }
    return true;
  }

  checkSortedArrayDesc(arr, i = 0) {
    if (i === arr.length - 1) {
        return true;
    }
    if (arr[i] < arr[i + 1]) {
        return false;
    }
    return this.checkSortedArrayDesc(arr, i + 1);
  }

}
