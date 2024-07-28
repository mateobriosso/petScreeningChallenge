import { type Page, type Locator , expect } from '@playwright/test';

export default class TestPage {
  readonly page: Page;
  readonly btnInput: Locator;
  readonly btnButton: Locator;
  readonly btnSelect: Locator;
  readonly btnDrag: Locator;
  readonly btnMultiSelect: Locator;
  readonly btnTable: Locator;
  readonly btnAdvTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnInput = page.getByRole('link', { name: 'Edit' });
    this.btnButton = page.getByRole('link', { name: 'Click' });
    this.btnSelect = page.getByRole('link', { name: 'Drop-Down' });
    this.btnDrag = page.getByRole('link', { name: 'AUI - 1' });
    this.btnMultiSelect = page.getByRole('link', { name: 'AUI - 4' });
    this.btnTable = page.getByRole('link', { name: 'Simple table' });
    this.btnAdvTable = page.getByRole('link', { name: 'Advance table' });
    
  }

  async clickInput() {
    await this.btnInput.click();
  }
  async clickButton() {
    await this.btnButton.click();
  }
  async clickSelect() {
    await this.btnSelect.click();
  }
  async clickDrag() {
    await this.btnDrag.click();
  }
  async clickMultiSelect() {
    await this.btnMultiSelect.click();
  }
  async clickTable() {
    await this.btnTable.click();
  }
  async clickAdvancedTable() {
    await this.btnAdvTable.click();
  }
}