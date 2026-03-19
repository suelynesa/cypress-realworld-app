# 🐞 Bug Report – Transfer Feature

## 🆔 Bug ID
TRANS-003

---

## 🏷 Title
Negative transfer values increase user account balance

---

## 🌍 Environment

Environment: Localhost  
URL: http://localhost:3000  
Browser: Chrome 145  
Operating System: Windows 10 Pro  

---

## 📂 Type

Validation

---

## 🚨 Severity
Critical / Blocker

---

## ⏳ Priority
High

---

## 🧠 Justification

* This issue breaks financial transaction rules and allows users to artificially increase their account balance.
* This represents a critical integrity and security problem in the application.

---

## 📌 Preconditions

User is logged into the application  
User has available balance  
A valid contact exists in the system

---

## 🔁 Steps to Reproduce

1. Log into the application
2. Click on "$ NEW" to start a new transfer
3. Select a contact
4. Enter a negative value in the amount field (example: -10)
5. Add a note
6. Click "Pay"

---

## ✅ Expected Result

* The system should reject negative values and display a validation error message.
* The transfer should not be processed.

---

## ❌ Actual Result

* The transfer is processed successfully.
* Instead of decreasing the account balance, the balance increases.

```
Example:

Initial Balance: $100  
Transfer Amount: -10  

Final Balance: $110
```
---

## 🎥 Evidence

See automated test execution and logs demonstrating the incorrect balance update.