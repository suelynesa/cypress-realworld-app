# Login Feature – Test Cases 

This document presents some test cases that were automated with Cypress for login functionality. 
The complete test suite is available in the Excel file inside the `/docs` folder.

---

## Feature: Login

### Objective
Validate that users can authenticate successfully and that proper validations are applied for invalid scenarios.

---

## Test Scenarios Covered

| ID | Preconditions | Scenario | Steps | Expected Result | Status |
|----|----------|--------------|-------|----------------|-----|
| TC-LOGIN-001 | Access the system login page | Successful login with valid credentials | 1. Enter valid username 2. Enter valid password 3. Click Sign in | User is redirected to dashboard | Pass
| TC-LOGIN-002 | Access the system login page | Login with non-existent username | 1. Enter unregistered username 2. Enter any password 3. Click Sign in | An error message appears stating: "invalid username and/or password" | Pass
| TC-LOGIN-011 | Access the system login page | Validation of minimum password length rule at login. | 1. Enter unregistered username 2. Enter a 3-character password. 3. Remove focus from the password field (click outside the field or press TAB) | - The error message "Password must contain at least 4 characters" appears. - The login button should remain disabled. | Pass

---

## Test Techniques Applied

- Functional Test
- Equivalence Partitioning
- Boundary Value Analysis
- Negative Testing
- Validation Testing

---

## Notes

For the complete and detailed test case documentation (including other features), please refer to:

📎 `test-cases-complete.xlsx`