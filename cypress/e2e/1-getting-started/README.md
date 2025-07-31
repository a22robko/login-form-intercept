# 🔐 Cypress: Login Form Intercept Test

This project demonstrates how to use **Cypress** to intercept and test a login form on a JavaScript web application. The test simulates user behavior, mocks network responses, and validates visual and functional feedback.

---

## 🔍 What This Test Covers

- Simulated login via a web form
- Typing email and password
- Intercepting network requests with `cy.intercept()`
- Showing success or error messages based on mock response
- CSS styling validation of error states

---

## 🖼️ Screenshots & Explanation

### ✅ 1. Test Code and Mocked Login Success

<p align="center">
  <img src="https://github.com/user-attachments/assets/090f02c8-92a5-41ae-8cac-5b6031f6a8e6" width="380" />
</p>

This test uses `cy.intercept()` to simulate a successful login via a mocked API response.  
The test validates whether the login message and status are handled as expected.

---

### ❌ 2. Network Error UI – Unreachable Server

<p align="center">
  <img src="https://github.com/user-attachments/assets/55ef834f-0a81-4de4-8d30-786caf3f05f8" width="380" />
</p>

In this test case, the mocked server is unreachable. Cypress verifies that a `"Network error"` message is displayed to the user in red.

---

### 💻 3. Cypress Console – Failed Login Assertion

<p align="center">
  <img src="https://github.com/user-attachments/assets/94cac9b4-4c95-4415-946a-2c93af402642" width="380" />
</p>

Cypress validates that the message "Network error" appears and also checks the **CSS color** is `rgb(255, 0, 0)` (red) using DOM assertions.  
This ensures visual feedback is correctly implemented for failed logins.

---

### 🧪 4. UI Validation of Login Field Styling

<p align="center">
  <img src="https://github.com/user-attachments/assets/10cec52d-7411-4e27-8076-a238de0efa2d" width="380" />
</p>

Here, the test highlights that the password field receives a red border or validation style upon failed login.  
Cypress can assert visibility, style, and content of the login form response.

---

## ▶️ How to Run This Test

1. Start your local server:
```bash
npm run start
```

2. Run Cypress test runner:
```bash
npx cypress open
```

3. (Optional) Run in headless mode:
```bash
npx cypress run
```

---

## 🧪 Summary

This test ensures that:
- Network errors are handled gracefully
- Cypress intercepts and controls responses
- The UI provides meaningful feedback to users
- CSS and visual indicators match expected states
