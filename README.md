## 🧪 Login Form – Mocked API Tests with Cypress & Playwright

This test suite verifies how the login form behaves when interacting with a backend, using **mocked API responses**.  
Both **Cypress** and **Playwright** are used to simulate success and failure cases without requiring a real server.

---

### ✅ What’s Tested?

- Successful login with mocked response  
- Network error simulation (server unreachable)  
- Message display based on result  
- Form submission via `form.submit()`  
- Local testing without a real backend  

## 📝 Project Description – Login Form with Mocked API Testing

In this project, I created and tested a simple **login form** that interacts with a backend API using **mocked responses**.  
The goal was to validate how the frontend handles different API outcomes, such as successful logins and network failures without using a real server.

---

### 🎯 Objectives

- Build a functional **login form** using HTML, CSS, and JavaScript  
- Display a response message on the page (e.g., “Login success” or “Network error”)  
- Use **Cypress** and **Playwright** to test frontend behavior  
- **Mock API responses** instead of relying on a real backend  
- Verify that correct messages appear based on the mocked API response

---

### 🛠 Technologies & Tools

- **HTML/CSS/JavaScript** – for the UI and DOM logic  
- **Cypress** – for testing success and failure cases using `cy.intercept()`  
- **Playwright** – for similar tests using `page.route()`  
- **API mocking** – to simulate backend behavior in both test frameworks

---

### ✅ What’s Being Tested

- Successful login shows `"Login success"` message  
- Network error shows `"Network error"` message  
- Form is submitted using `form.submit()` (not a button click)  
- Tests are fully isolated—**no real backend is used**  
- In **Cypress**, the color of the message is also verified:
  - Green for success
  - Red for error

---

### 🧪 Test Cases

**Cypress:**
- Mocks a successful login response (200 OK)
- Simulates a network error using `forceNetworkError`
- Verifies message content and CSS color (`rgb(0, 128, 0)` for success, `rgb(255, 0, 0)` for error)

**Playwright:**
- Uses `page.route()` to intercept `/api/login`
- Simulates both success and failure scenarios
- ✅ Verifies message text  
- ⚠️ **Color check removed** – Initially implemented but later removed due to unstable results

---
