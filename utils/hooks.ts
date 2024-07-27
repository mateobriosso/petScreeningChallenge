import { Page } from '@playwright/test';
import { buildUrl } from './urlBuilder';
import InputPage from '../pages/input.page';
import ButtonPage from '../pages/button.page';
import DragPage from '../pages/drag.page';
import SelectPage from '../pages/select.page';
import TablePage from '../pages/table.page';
import AdvancedTablePage from '../pages/advanced-table.page';
import TestPage from '../pages/test.page';

async function beforeEach(
  page: Page,
  PageObject: TestPage | InputPage | ButtonPage | DragPage | SelectPage | TablePage | AdvancedTablePage,
  targetPage: string) {
  
  await page.goto(buildUrl(targetPage));
  const pageObject = await new PageObject(page);
  return pageObject;
}

export default { beforeEach };