# 🛡️ Playwright: Login Form Intercept Test

This project demonstrates how to use **Playwright** to intercept and test a login form on a JavaScript-based web application. It simulates user interaction, handles incorrect login attempts, and validates the system's response using automated browser testing.

---

## 🔍 What This Test Covers

- Simulated login using an HTML form
- Auto-filling email and password fields
- Attempting incorrect login credentials
- Validating test flow and response
- Running in a local development environment

---

## 🖼️ Screenshots & Explanation

### 🧪 1. Login Page UI During Test

<p align="center">
<img width="380" height="590" alt="Login UI" src="https://github.com/user-attachments/assets/f6d7cc82-4386-4c35-85c6-d971d72fe225" />
</p>

This image shows the test running in a browser, where Playwright simulates entering credentials on the login page:
- Email: `test@example.com`
- Password: `******`

The test clicks the **"Log In"** button to attempt authentication.

---

### 💻 2. Test Code and Result in VS Code

<p align="center">
<img width="380" height="307" alt="Playwright login test code" src="https://github.com/user-attachments/assets/c5ebf25f-803c-4559-8cad-42f411e4c194" />
</p>

This screenshot displays the Playwright test script running in **Visual Studio Code**.

The test simulates a failed login attempt using:
```js
await page.fill('#email', 'wrong@example.com');
await page.fill('#password', 'wrongpass');
```

Below the script, the terminal output confirms:
```
1 passed (0.5s)
```
✅ Meaning the login test completed successfully (i.e., the app responded correctly to invalid input).

---

### 🌐 3. Local Server Running

<p align="center">
<img width="380" height="275" alt="Localhost running" src="https://github.com/user-attachments/assets/6ae71567-6159-4194-a08b-86d4446f2478" />
</p>

This image shows the test environment being served locally via:

```
http://localhost:3000
```

This address is used as the base URL for Playwright tests. You can also access it from another device via the network address shown (`http://172.20.10.4:3000`).

---

## ▶️ How to Run This Test

### 1. Start the Local Server:
```bash
npm run start
```

### 2. Run the Playwright Test:
```bash
npx playwright test
```

### 3. View the HTML Test Report (optional):
```bash
npx playwright show-report
```
