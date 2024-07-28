import { type Page, type Locator , expect } from '@playwright/test';

export default class TablePage {
  readonly page: Page;
  readonly tblPrices: Locator;
  readonly tblPricesBody: Locator;
  readonly tblPricesFoot: Locator;
  readonly tblPricesTotal: Locator;
  readonly tblPeople: Locator;
  readonly chkRaj: Locator;
  readonly tblSort: Locator;
  readonly tblHdDessert: Locator;
  readonly tblColDataDesserts: Locator;


  constructor(page: Page) {
    this.page = page;
    this.tblPrices = page.locator('#shopping');
    this.tblPricesBody = this.tblPrices.locator("tbody");
    this.tblPricesFoot = this.tblPrices.locator("tfoot");
    this.tblPricesTotal = this.tblPricesFoot.locator("td").last();
    this.tblPeople = page.locator('#simpletable');
    this.chkRaj = page.locator('#second');
    this.tblSort = page.locator('table.mat-sort');
    this.tblHdDessert = page.locator('th[mat-sort-header="name"]');
    this.tblColDataDesserts = page.locator('table.mat-sort tr td:first-child');

  }
  
  async checkRajCheckbox(){
    const rows = this.tblPeople.locator("tbody tr");
    const rajRow = rows.filter({
      has: this.page.locator('td'),
      hasText: 'Raj'
    })
    await rajRow.locator('input').check();
  }

}
