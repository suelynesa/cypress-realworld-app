# 🧪 QA Automation Project – Cypress Real World App

This repository contains End-to-End (E2E) automated tests developed with Cypress, applying structured test design, risk-based prioritization and QA best practices.

The project simulates a real QA workflow including:

* Test Strategy
* Risk Analysis
* Test Case Design
* Bug Reporting
* End-to-End Test Automation

---

# 🎯 Project Objective

Apply end-to-end test automation in a real-world application while prioritizing critical business flows based on risk and impact analysis.

The goal of this project is to demonstrate a **complete QA process**, from test design to automation.

---

# 🚨 Critical Bug Discovered

During testing of the **Money Transfer feature**, a critical defect was identified.

The system allows **negative transfer values**, which results in the **user account balance increasing instead of decreasing**.

Example:

Initial Balance: $100
Transfer Amount: -10

Final Balance: $110

This issue breaks financial transaction rules and represents a **critical financial integrity problem**.

A detailed bug report is available in the project documentation.

---

# 🧠 Test Strategy Overview

## Context

The application simulates a financial environment with authentication, user management and money transfer features.

Considering the business domain, failures in critical flows may cause **financial inconsistency and loss of user trust**.

---

# Risk-Based Prioritization

The automation scope was defined based on business impact and regression risk.

### 1️⃣ Authentication (Login)

* System entry point
* Security-sensitive flow
* High impact in case of validation failure

### 2️⃣ User Registration

* Data integrity validation
* Required field validation
* Error handling verification

### 3️⃣ Money Transfer

* Core financial functionality
* Balance consistency validation
* Positive and negative scenarios

### 4️⃣ Transaction History

* Data consistency validation
* Empty-state behavior verification

---

# 🔎 Test Design Techniques Applied

* Equivalence Partitioning
* Boundary Value Analysis
* Negative Testing
* Validation Testing
* Happy Path Testing
* Edge Case Testing

---

# 🤖 Automation Decision Criteria

Not all scenarios were automated.

Automation was prioritized for:

* Critical business flows
* Financial operations with higher risk
* Repetitive validation scenarios
* Flows with greater regression probability

Exploratory testing was performed before automation to identify potential risks and validation gaps.

---

# 🛠 Technologies Used

* Cypress
* JavaScript
* Page Object Model (POM)
* Fixtures
* Git
* GitHub

---

# 📂 Project Structure

```
cypress/
 ├── fixtures/
 │    └── credentials.json
 │
 ├── pages/
 │    ├── loginPage.js
 │    ├── dashboardPage.js
 │    ├── signUpPage.js
 │    ├── transactionPage.js
 │    └── transferPage.js
 │
 ├── support/
 │    └── commands.js
 │
 └── tests/
      └── automation-rwa
           ├── login.spec.js
           ├── signUp.spec.js
           └── transfer.spec.js
```

---

# ✅ Automated Scenarios

Test scenarios were defined based on critical application flows and business impact.

### 🔐 Login

* Login with invalid credentials
* Error message validation
* Login with valid credentials
* Dashboard redirection validation

---

### 👤 User Registration

* Successful new user registration
* Confirmation message validation
* Registration with incomplete data
* Error message validation
* Validation for inputs containing only spaces

---

### 💸 Money Transfer

* Transfer with sufficient balance
* Success message validation
* Transfer with insufficient balance
* Error message validation
* Transfer with negative value (critical defect identified)

---

### 📜 Transaction History

* View transaction history successfully
* Transaction list display validation
* Empty-state validation for users without previous transactions

---

# 📄 QA Documentation

Project documentation simulating a real QA workflow.

### Bug Reports

* Bug report template
* Bug report for Sign Up feature - 
* Critical bug identified in Transfer feature


### Test Cases

* Login test cases
* Sign Up test cases
* Transfer test cases

### Additional Documentation

* Risk analysis
* Test strategy
* Test summary report

All documentation is available in the `/docs` folder.

---

# ▶️ How to Run the Tests

```
npm install
npx cypress open
```

---

# 📎 Project Note

The base project was forked from the **Cypress Real World App** and adapted for QA automation practice and portfolio purposes.

---

# 🎬 Test Execution Example

Example of automated test execution using Cypress.

![Test Execution](docs/test-execution.gif)