# Singlish → Sinhala Translator Testing (Playwright)

This repository contains automated functional and UI tests for the Singlish-to-Sinhala transliteration system available at:

https://www.swifttranslator.com/

The objective of this project is to assess:
- Accuracy of Singlish to Sinhala conversion
- Robustness under different input conditions
- UI behavior such as real-time output updating and input handling

This project was developed as part of an academic testing assignment using Playwright.

---

## Tools & Technologies
- Node.js
- Playwright Test
- Visual Studio Code
- GitHub

---

## Prerequisites
- Node.js (latest LTS recommended)
- npm (included with Node.js)

git clone ----> <https://github.com/yohan317/ITPM>

====================================================================================




## 🧪 Playwright Test Execution Guide

```bash
# Run all the functional tests
npx playwright test tests/test_negpos.spec.js

# Run all tests on Chromium only
npx playwright test --project=chromium

# View HTML test report
npx playwright show-report

```
---
====================================================================================
## 📁 Project Structure (File Separation)

```text
singlish-sinhala-playwright-tests/
├─ tests/
│  ├─ test_negpos.spec.js           #all the test cases
├─ playwright.config.js             # Playwright configuration file
├─ package.json                     # Project dependencies
├─ reports/
│  └─ screenshots/                  # HTML report screenshots (positive & negative tests only)
└─ README.md                        # Project documentation

