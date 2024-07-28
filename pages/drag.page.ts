import { type Page, type Locator , expect } from '@playwright/test';

export default class DragPage {
  readonly page: Page;
  readonly squareDrag: Locator;
  readonly squareBoundary: Locator;

  constructor(page: Page) {
    this.page = page;
    this.squareDrag = page.locator('#sample-box');
    this.squareBoundary = page.locator('div.example-boundary');
  }

}
