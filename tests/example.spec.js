import { test, expect } from '@playwright/test';

test('Login flow with mocked API and error handling', async ({ page }) => {
  // Go to your local or deployed login page
  await page.goto('https://a22robko.github.io/login-form-intercept/');

  // Fill in an invalid email (to demonstrate that it won't be sent)
  await page.fill('#email', 'hbwkfwjnlwo');

  await page.route('**/api/login', route => {
    const request = route.request();
    const body = JSON.parse(request.postData());

    if (body.email === 'test@example.com' && body.password === 'password') {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Login success' }),
      });
    } else {
      
      route.fulfill({
        status: 401,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Login failed' }),
      });
    }
  });

  // Attempt login with incorrect credentials
  await page.fill('#email', 'fel@mejl.se');
  await page.fill('#password', 'felkod');
  await page.click('button[type="submit"]');

  await expect(page.locator('#message')).toHaveText('Login failed');
  await expect(page.locator('#message')).toHaveCSS('color', 'rgb(255, 0, 0)');

  // Attempt login with correct credentials
  await page.fill('#email', 'test@example.com');
  await page.fill('#password', 'password');
  await page.click('button[type="submit"]');

  // Expect success message to be shown in green
  await expect(page.locator('#message')).toHaveText('Login success');
  await expect(page.locator('#message')).toHaveCSS('color', 'rgb(0, 128, 0)');
});
