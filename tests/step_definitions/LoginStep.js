const { Given, When, Then } = require("@cucumber/cucumber");

const { chromium, expect } = require("@playwright/test");

Given("User navigates to the application", async () => {

const browser = await chromium.launch({ headless: false });

const context = await browser.newContext();

this.page = await context.newPage();

await this.page.goto("https://talent500.co/auth/signin");

});

When("I enter the username as {string}", async (username) => {

await this.page.locator("[data-id=email-field-login]").click();

await this.page.locator("[data-id=email-field-login]").fill(username);

});

When("I enter the password as {string}", async (password) => {

await this.page.locator("[data-id=password-field-login]").click();

await this.page.locator("[data-id=password-field-login]").fill(password);

});

When("I click on login button", async () => {

await this.page.locator("[data-id=submit-login-btn]").click();

});

Then("User should logged in successfully", async () => {
const text = await this.page.locator('[id="progress-bar"]').textContent();

expect(text).toContain("PROFILE");

});

Then("Logout from the application", async () => {

await this.page.locator('[alt="DropDown Button"]').click();

await this.page.locator('[data-id="nav-dropdown-logout"]').click();

});