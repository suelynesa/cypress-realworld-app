# 🔎 Risk & Quality Analysis - Login Feature

## 📌 Scenario Evaluated

Validation of the system behavior after multiple consecutive login attempts using an incorrect password.

---

## 🔍 Observation

During testing, five consecutive login attempts were performed using a valid username and an incorrect password.

The system behavior observed:

* Allows unlimited login attempts.
* Displays only the standard error message: **"Username and/or password is invalid."**
* Does not implement temporary account lockout.
* Does not provide a visible password recovery option on the error screen.

---

## ⚠️ Identified Risks

* Potential vulnerability to **brute force attacks**.
* Poor user experience when users genuinely forget their password.
* Increased number of repeated failed attempts without guidance toward a resolution.

---

## 💡 Improvement Suggestions

1. Implement a **temporary account lockout** after a defined number of consecutive failed login attempts.
2. Display a visible **"Forgot Password"** option after multiple authentication failures.
3. Consider implementing additional protection mechanisms such as **CAPTCHA**.

---

## 🎯 Expected Benefits

* Increased protection against automated attacks.
* Improved user experience during authentication issues.
* Reduction of unauthorized access attempts.