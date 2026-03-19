# 📊 Transaction History - Quality Analysis

## 📌 Context

This document presents a quality analysis of the Transaction History feature based on exploratory testing. Due to the absence of formal requirements (user stories and acceptance criteria), the analysis is based on expected user behavior and usability principles.

---

## 🔍 Issue 1: Date Filter Without Visible Dates

### 🧪 Description

The system provides a date filter for transaction history. However, transaction entries do not display any date information.

### 🎯 Expected Behavior

* Each transaction should display its date
* Users should be able to visually confirm that filtered results match the selected date range

### ⚠️ Actual Behavior

* The filter appears to work
* However, transaction dates are not displayed
* Users cannot verify whether the filter is correctly applied

### 🧠 Analysis

This is not necessarily a functional bug, since the filtering mechanism may still be working correctly in the backend.

However, it represents a **usability and UX issue**, because:

* It reduces transparency
* It prevents validation by the user
* It can reduce trust in the system

### 🏷 Classification

* UX Issue / Usability Gap

### 💡 Recommendation

* Display transaction date in each list item
* Ensure the format is clear and consistent (e.g., DD/MM/YYYY or locale-based)

---

## 🔍 Issue 2: Value Filter Usability (Slider Limitation)

### 🧪 Description

The transaction value filter uses a slider with a fixed range from $0 to $1000.

### 🎯 Expected Behavior

* Users should be able to filter transactions based on any valid value present in the system
* Users should be able to precisely define minimum and maximum values

### ⚠️ Actual Behavior

* The slider limits selection between $0 and $1000
* The system allows transactions above $1000
* It is difficult to select exact values using the slider

### 🧠 Analysis

This issue has two aspects:

#### 1. Functional inconsistency

* The filter does not support all valid transaction values
* This may prevent users from finding specific transactions

#### 2. Usability issue

* Slider interaction is imprecise
* Poor user experience for exact filtering

### 🏷 Classification

* Functional Bug (range limitation)
* UX Improvement (input precision)

### 💡 Recommendation

* Allow values above $1000
* Add input fields for manual entry (min/max)
* Optionally combine slider + input fields

---

## 🧠 Final Considerations

This analysis highlights the importance of:

* Aligning UI with system capabilities
* Providing clear feedback to users
* Ensuring consistency between filters and displayed data

Even when functionality works, lack of visibility and usability can significantly impact user experience.
