# 🔎 Risk & Quality Analysis – Sign Up Feature

## 1. Weak Password Policy

### Observation

The password policy currently allows:

* Minimum length of **4 characters**
* No requirement for character type combinations

The system accepts simple patterns such as:

* `1111`
* `aaaa`
* `!!!!`

### Risk

* High vulnerability to **brute force attacks**
* Low account security level
* Potential compromise of user data if exploited

### Classification

This may not be considered a bug if the requirement was intentionally defined this way.

However, it represents a **significant security risk**.

### Improvement Suggestion

* Define a **minimum length of 8 characters**
* Require at least **three of the following character types**:

  * Uppercase letter
  * Lowercase letter
  * Number
  * Special character
* Block simple or repetitive patterns

---

## 2. Poorly Defined Requirement – First Name, Last Name and Username

### Observation

The fields currently allow:

* Single-character inputs
* Numbers only
* Symbols only
* Inconsistent combinations

Examples:

* `@`
* `1`
* `_`

### Risk

* Inconsistent data stored in the database
* Difficulty identifying users
* Potential issues in reporting and integrations
* Data pollution

### Classification

This may not be considered a bug if no validation rule has been defined.

However, it represents a **gap or weakness in business rules**.

### Improvement Suggestion

* Define a **minimum number of characters** (e.g., 2 or 3)
* Restrict allowed characters using **regex validation**
* Clearly document validation rules

---

## 3. Absence of Maximum Character Limit

### Observation

Input fields do not appear to enforce a **maximum character limit**.

### Risks

* Potential database field overflow
* UI layout issues
* Risk of excessive payload attacks
* Possible performance degradation

### Classification

Currently considered a **technical risk**.

It may become a **defect** if it leads to system failure or instability.

### Improvement Suggestion

Define a maximum length aligned with:

* Database column size
* Business rules
* User interface layout constraints

---

## Conclusion

The analysis identified weaknesses related to:

* Security
* Data integrity
* Business rule definition
* Technical sustainability

A review of validation criteria and alignment between **frontend and backend rules** is recommended to ensure consistency and reduce risks.
