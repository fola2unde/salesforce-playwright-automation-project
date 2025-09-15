import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";


test("simple login test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.fillUsername("aj.baba2unde505@agentforce.com");
  await loginPage.fillPassword("Image360!");

  const homePage = await loginPage.clickLoginButton();
  await homePage.expectServiceTitleToBeVisible();
});
