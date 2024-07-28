import { type Page, type Locator , expect } from '@playwright/test';

export default class MultiSelectPage {
  readonly page: Page;
  readonly options: Locator;
  readonly optSelenium: Locator;
  readonly optLetCode: Locator;
  readonly lstSelected: Locator;

  constructor(page: Page) {
    this.page = page;
    this.options = page.locator('#selectable');
    this.optSelenium = page.locator('#selectable').first();
    this.optLetCode = page.locator("#selectable").last();
    this.lstSelected = page.locator('div.ui-selected h3');

  }

}
