import { type Page, type Locator , expect } from '@playwright/test';

export default class InputPage {
  readonly page: Page;
  readonly txtFullName: Locator;
  readonly txtAppendAndTab: Locator;
  readonly txtCheckText: Locator;
  readonly txtClear: Locator;
  readonly txtDisabled: Locator;
  readonly txtReadonly: Locator;

  constructor(page: Page) {
    this.page = page;
    this.txtFullName = page.locator('#fullName');
    this.txtAppendAndTab = page.locator('#join');
    this.txtCheckText = page.locator('#getMe');
    this.txtClear = page.locator('#clearMe');
    this.txtDisabled = page.locator('#noEdit');
    this.txtReadonly = page.locator('#dontwrite');

  }

}