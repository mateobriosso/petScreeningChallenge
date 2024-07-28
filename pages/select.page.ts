import { type Page, type Locator , expect } from '@playwright/test';

export default class SelectPage {
  readonly page: Page;
  readonly slFruits: Locator;
  readonly pSubtitle: Locator;
  readonly slSuperheroes: Locator;
  readonly slLanguages: Locator;
  readonly slCountries: Locator;

  constructor(page: Page) {
    this.page = page;
    this.slFruits = page.locator('#fruits');
    this.pSubtitle = page.locator('div.notification.is-success');
    this.slSuperheroes = page.locator('#superheros');
    this.slLanguages = page.locator('#lang');
    this.slCountries = page.locator('#country');

  }

}
