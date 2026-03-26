# Bug Report – Transaction not displayed in "Everyone" history

---

## 🆔 ID
BUG-HIST-001

---

## 📌 Title
Transaction does not appear in "Everyone" transaction history after successful transfer

---

## 🧭 Feature
Transaction History

---

## 🚨 Severity
High

---

## 🔥 Priority
Medium

---

## 🧠 Justification
Since the system is a financial application, inconsistency in how data is presented can lead to:

- Loss of user trust  
- Misinterpretation of transaction status  
- Potential concerns about data integrity  

However, the issue does not block the main functionality. Users are still able to:

- Perform transfers  
- View their own transactions  

---

## 📌 Preconditions
- User is registered and logged into the system  
- User has sufficient balance  
- There is at least one contact available for transfer  

---

## 🔄 Steps to Reproduce
1. Click on **"$ NEW"**  
2. Select a contact  
3. Enter a valid transfer amount  
4. Add a note  
5. Click **"Pay"**  
6. Navigate to **"Mine"** tab → confirm transaction is displayed  
7. Navigate to **"Everyone"** tab  
8. Check the transaction list 

---

## ✅ Expected Result
- The transaction should be displayed in **"Everyone"** transaction history  
- The transaction should appear at the top of the list (most recent)

---

## ❌ Actual Result
- The transaction is displayed in **"Mine"**  
- The transaction does NOT appear in **"Everyone"**

---

## 🎥 Evidence
- Automated test: `TC-HIST-009`
- Cypress test result showing failure
- (Optional) Screenshot / video of execution

---

## 🔎 Notes
This issue indicates a possible inconsistency in how transactions are propagated or retrieved across different history views.

It may be related to:
- Backend data synchronization
- Filtering logic in "Everyone" tab
- Caching or API response issues