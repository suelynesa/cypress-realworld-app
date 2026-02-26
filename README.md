# 🧪 Automated Testing – Cypress Real World App

This repository contains End-to-End (E2E) automated tests developed using Cypress, applying structured test design and industry best practices.

---

## 🎯 Objetivo

Apply end-to-end test automation in a real-world application, prioritizing critical business flows based on risk and impact analysis.

---

## 🧠 Test Strategy Overview
Context

The application simulates a financial environment with authentication, user management and money transfer features.
Considering the business domain, failures in critical flows may cause financial inconsistency and loss of user trust.

## Risk-Based Prioritization

The automation scope was defined based on business impact and regression risk:

1. Authentication (Login)
     - System entry point
     - Security-sensitive flow
     - High impact in case of validation failure
2. User Registration
     - Data integrity validation
     - Required field and error handling validation
3. Bank Transfer
     - Core financial functionality
     - Balance consistency validation
     - Positive and negative scenarios
4. Transaction History
     - Data consistency validation
     - Empty-state behavior verification

## 🔎 Test Design Techniques Applied

- Equivalence Partitioning
- Negative Testing
- Validation Testing
- Happy Path and Edge Scenarios

## Automation Decision Criteria

Not all scenarios were automated. Priority was given to:
- Critical business flows
- Financial operations with higher impact
- Repetitive validation scenarios
- Flows with greater regression probability

Exploratory testing was performed to identify risks before automation.

---

## 🛠 Tecnologias Utilizadas

- Cypress
- JavaScript
- Page Object Model (POM)
- Fixtures
- Git & GitHub

---

## 📂 Estrutura do Projeto

```
cypress/
 ├── fixtures/
 │    └── credentials.json
 ├── pages/
 │    ├── loginPage.js
 │    └── dashboardPage.js
 └── tests/
      └── aaa
           └── login.spec.ts
```
---

## ✅ Automated Scenarios

Os cenários foram definidos com base em fluxos críticos da aplicação, considerando risco de negócio e impacto para o usuário final.

### 🔐 Login

- Login with invalid credentials
- Error message validation
- Login with valid credentials
- Dashboard redirection validation

---

### 👤 User Registration

- Successful new user registration
- Confirmation message validation
- Registration with incomplete data
- Error message validation

---

### 💸 Bank Transfer

- Transfer with sufficient balance
- Confirmation message validation
- Transfer with insufficient balance
- Error message validation

---

### 📜 Transaction History

- View transaction history successfully
- Display validation
- View history for user without previous transactions
- Empty-state message validation

---

## 📌 Best Practices Applied

- Separation of responsibilities (Page Object Model)
- Code reusability
- Domain-based organization
- Scalable structure
- Externalized test data (fixtures)

---

## 🚀 How to Run the Tests

```bash
npm install
npx cypress open
```

---

## 📎 Project Note

The base project was forked from the Cypress Real World App.

---

## 📄 Documentation

- [Bug Report Template](docs/bug-report-template.md)
- [Sample Bug Report](docs/sample-bug-log-001.md)
- [Quality Analysis](docs/quality-analysis.md)

📋 Test Cases

- [Login Test Cases (Sample)](docs/test-cases-login.md)
- Complete test suite available in Excel format inside `/docs`