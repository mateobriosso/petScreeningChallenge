import { type Page, type Locator , expect } from '@playwright/test';

export default class ButtonPage {
  readonly page: Page;
  readonly btnGoToHome: Locator;
  readonly btnFindLocation: Locator;
  readonly btnFindColor: Locator;
  readonly btnDimension: Locator;
  readonly btnDisabled: Locator;
  readonly btnHold: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnGoToHome = page.locator('#home');
    this.btnFindLocation = page.locator('#position');
    this.btnFindColor = page.locator('#color');
    this.btnDimension = page.locator('#property');
    this.btnDisabled = page.locator('#isDisabled.is-info');
    this.btnHold = page.locator('#isDisabled.is-primary');

  }


}
