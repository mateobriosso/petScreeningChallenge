import { test, expect } from "@playwright/test";
import hooks from '../utils/hooks';
import pages from '../utils/pages';
import InputPage from "../pages/input.page";

let inputPage: InputPage;

test.describe("Controls Automation - Input", () => {
  test.beforeEach(async ({ page }) => {
    inputPage = await hooks.beforeEach(page, InputPage, pages.inputPage);
  });
  test("Fill text", async () => {
    await inputPage.txtFullName.fill('Luis Suárez');
    await expect(inputPage.txtFullName).toHaveValue('Luis Suárez');

  });
  test("Append text and press TAB key", async () => {
    const prevText = await inputPage.txtAppendAndTab.getAttribute('value');
    await inputPage.txtAppendAndTab.fill(prevText+'Luis Suárez');
    await expect(inputPage.txtAppendAndTab).toHaveValue(prevText+'Luis Suárez');
    await inputPage.txtAppendAndTab.press('Tab');
    await expect(inputPage.txtCheckText).toBeFocused();

  });
  test("Get text value", async () => {
    const text = await inputPage.txtCheckText.getAttribute('value');
    await expect(text).toEqual('ortonikc');

  });
  test("Clear text", async () => {
    await inputPage.txtClear.clear();
    await expect(inputPage.txtClear).toHaveText('');

  });
  test("Check disabled textbox", async () => {
    await expect(inputPage.txtDisabled).toBeDisabled();

  });
  test("Check text is readonly", async () => {
    await expect(inputPage.txtReadonly).toHaveAttribute('readonly');

  });

});
