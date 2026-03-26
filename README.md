# 🧪 QA Automation Project – Cypress Real World App

This repository contains End-to-End (E2E) automated tests developed with Cypress, applying structured test design, risk-based prioritization and QA best practices.

The project simulates a real QA workflow including:

* Test Strategy
* Risk Analysis
* Test Case Design
* Bug Reporting
* End-to-End Test Automation
* Quality & UX Analysis

---

# 🎯 Project Objective

Apply end-to-end test automation in a real-world application while prioritizing critical business flows based on risk and impact analysis.

The goal of this project is to demonstrate a **complete QA process**, from test design to automation, including **critical thinking and product quality analysis**.

---

# 🚨 Critical Bugs Discovered

During testing, multiple relevant defects were identified:

## 💸 Money Transfer

The system allows **negative transfer values**, resulting in the **user balance increasing instead of decreasing**.

**Example:**

* Initial Balance: $100
* Transfer Amount: -10
* Final Balance: $110

👉 This represents a **critical financial integrity issue**.

---

## 📜 Transaction History

### 1. Inconsistent Data Across Tabs

* Transactions appear correctly in **Mine**
* But may not appear in **Everyone**

👉 Indicates inconsistency between data sources

---

### 2. Value Filter Limitation

* Filter only supports values between **$0 and $1000**
* System allows transactions above this value

👉 **Functional inconsistency**

---

### 3. Filter Persistence Issue

* Applied filters are lost after page refresh

👉 **State management issue**

---

Detailed bug reports are available in the `/docs` folder.

---

# 🧠 Test Strategy Overview

## Context

The application simulates a financial environment with authentication, user management and money transfer features.

Failures in critical flows may cause:

* Financial inconsistency
* Loss of user trust

---

# ⚠️ Risk-Based Prioritization

Automation scope was defined based on business impact and regression risk.

### 1️⃣ Authentication (Login)

* System entry point
* Security-sensitive
* High impact

---

### 2️⃣ User Registration

* Data validation
* Error handling
* Input consistency

---

### 3️⃣ Bank Account (First-Time User Flow)

* Mandatory step after first login
* Blocks access to core features

---

### 4️⃣ Money Transfer

* Core financial functionality
* Balance validation
* Critical scenarios

---

### 5️⃣ Transaction History

* Data consistency
* Filtering behavior
* Empty-state validation

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
* Financial operations
* Regression-prone features
* Core user journeys

Exploratory testing was performed before automation to identify risks and inconsistencies.

---

# 🛠 Technologies Used

* Cypress
* JavaScript
* Page Object Model (POM)
* Custom Commands
* Fixtures
* Factory Pattern (test data generation)
* Git & GitHub

---

# 📂 Project Structure

```
rwa-cypress-tests/
 ├── fixtures/
 │    └── credentials.json
 │
 ├── pages/
 │    ├── loginPage.js
 │    ├── dashboardPage.js
 │    ├── signUpPage.js
 │    ├── bankAccountPage.js
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
           ├── transfer.spec.js
           ├── transactions.spec.js
           └── bankAccount.spec.js
```

---

# ✅ Automated Scenarios

Test scenarios were defined based on critical flows and business impact.

---

## 🔐 Login

* Successful login with valid credentials
* Login with non-existent username
* Validation of minimum password length rule at login

---

## 👤 User Registration

* Register new user successfully
* Required field validation
* Error message validation
* Validation for inputs with only spaces
* Existing user registration

---

## 🏦 Bank Account

* Require bank account creation on first login
* Successful bank account creation

---

## 💸 Money Transfer

* Transfer with sufficient balance
* Transfer with insufficient balance
* Error message validation
* Transfer with negative value (critical bug)
* Transfer with decimal values (cents)

---

## 📜 Transaction History

* View transaction history (Everyone)
* Empty-state validation for new users
* Transaction visibility in the "Everyone" history after transfer (bug identified)
* Filter persistence after refresh (bug identified)

---

# 📊 Quality Analysis (UX & Product)

Beyond functional testing, a quality analysis was performed.

### 🔍 Key Findings:

* Date filter exists but transaction dates are not displayed
* Value filter (slider) is imprecise and limits usability

👉 These were documented as **UX improvements**, not bugs.

📄 See: `docs/transaction-history-analysis`

---

# 📄 QA Documentation

Project documentation simulating a real QA workflow.

### 🐞 Bug Reports

* Transfer critical bug
* Transaction history inconsistencies

---

### 🧪 Test Cases

* Login
* Sign Up
* Transfer
* Transaction History
* Bank Account

---

### 📊 Additional Documentation

* Test strategy
* Risk analysis
* Test summary report
* Quality analysis

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