# Bug Report – Transaction History Feature

## Bug ID
BUG-HIST-001

---

## Title
Transaction does not appear in "Everyone" transaction history after successful transfer

---

## Environment

Environment: Localhost  
URL: http://localhost:3000  
Browser: Chrome 145  
Operating System: Windows 10 Pro  

---

## Type

Functional

---

## Severity
High

---

## Priority
Medium

---

## Justification

* This issue creates inconsistency in how transaction data is displayed across different views.
* It may lead to loss of user trust and confusion regarding transaction visibility.
* Although it does not block core functionality, it impacts data transparency and reliability.

---

## Preconditions

User is logged into the application  
User has sufficient balance  
At least one contact exists in the system  

---

## Steps to Reproduce

1. Log into the application  
2. Click on "$ NEW" to start a new transfer  
3. Select a contact  
4. Enter a valid transfer amount  
5. Add a note  
6. Click "Pay"  
7. Navigate to "Mine" tab and confirm the transaction is displayed  
8. Navigate to "Everyone" tab  
9. Check the transaction list  

---

## Expected Result

* The transaction should be displayed in the "Everyone" transaction history  
* The transaction should appear at the top of the list (most recent)  

---

## Actual Result

* The transaction is displayed in "Mine"  
* The transaction does NOT appear in "Everyone"  

---

## Evidence

- See automated test execution and logs demonstrating that the transaction is not displayed in the "Everyone" transaction history after a successful transfer.
- Video: /docs/evidence/BUG-HIST-001/BUG-HIST-001-inconsistency-behavior-repro.mp4

---

## Notes

This issue indicates a possible inconsistency in how transactions are propagated or retrieved across different history views.

It may be related to:

* Backend data synchronization  
* Filtering logic in "Everyone" tab  
* Caching or API response issues  