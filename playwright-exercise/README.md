# Playwright Automation Exercise

This is a Playwright test automation project designed for live coding interviews with software testing candidates. The project provides a starter test to help candidates demonstrate their test automation skills by building upon the existing framework.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A code editor (VS Code is recommended)

To verify your installations, run:
```bash
node --version
npm --version
```

## Setup Instructions

Follow these steps to set up the project:

1. **Navigate to the project directory:**
   ```bash
   cd paylocity-automation-challenge\playwright
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```
   This will download the necessary browser binaries (Chromium, Firefox, and WebKit).

## Running the Tests

To run the test suite:

```bash
npx playwright test
```

To run tests with UI mode (helpful for debugging):

```bash
npx playwright test --ui
```

To run tests in headed mode (see the browser):

```bash
npx playwright test --headed
```

To run tests on a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Viewing Test Results

After running tests, you can view the HTML report:

```bash
npx playwright show-report
```

This will open an interactive report in your browser showing test results, traces, and screenshots.

## Expected Outcome

When you run the tests, you should see:
- 1 test passing (runs on 3 browsers = 3 total passing tests)
- The test verifies navigation and interaction on the Paylocity website

If all tests pass, you're ready for your interview!

## Project Structure

```
playwright/
├── tests/
│   └── explorePayrollProducts.spec.ts  # Main test file
├── playwright.config.ts                 # Playwright configuration
├── package.json                         # Project dependencies
└── README.md                            # This file
```

## Possible Issue: Tests fail with "Element not found"
- **Solution**: The website structure may have changed. This is expected and not your fault. Document what you observe and be prepared to discuss during the interview.

## What to Expect During the Interview

During the live coding session, you may be asked to:
- Add new test cases
- Implement page object patterns
- Handle dynamic elements
- Add assertions and validations
- Debug failing tests
- Refactor existing code

## Need Help?

If you encounter any issues during setup, please contact your interview coordinator before your scheduled interview time.

## Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Playwright Test Assertions](https://playwright.dev/docs/test-assertions)

---

Good luck with your interview!
