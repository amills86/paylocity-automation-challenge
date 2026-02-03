# Playwright Automation Exercise

This is a Cypress test automation project designed for live coding interviews with software testing candidates. The project provides a starter test to help candidates demonstrate their test automation skills by building upon the existing framework.

## Project Structure

```
cypress/
├── e2e/
│   └── explorePayrollProducts.cy.js  # Starter test for candidates
├── support/
│   ├── commands.js                   # Custom Cypress commands
│   └── e2e.js                        # Global configuration
cypress.config.js                      # Cypress configuration
package.json                           # Project dependencies
```

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- A code editor (VS Code is recommended)

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd paylocity-automation-challenge/cypress
```

2. Install dependencies:
```bash
npm install
```

3. **Verify setup before your interview:**
   Run the starter test to ensure everything is working correctly:
   ```bash
   npx cypress run --spec "cypress/e2e/explorePayrollProducts.cy.js"
   ```
   The test should pass successfully. If you encounter any issues, please resolve them before the interview.

### Running Tests

#### Open Cypress Test Runner (Interactive Mode)
```bash
npx cypress open
```
This opens the Cypress UI where you can select and run tests interactively.

#### Run Tests in Headless Mode
```bash
npx cypress run
```

#### Run a Specific Test File
```bash
npx cypress run --spec "cypress/e2e/explorePayrollProducts.cy.js"
```

## Starter Test

The `explorePayrollProducts.cy.js` test demonstrates:
- Navigating to the Paylocity website
- Clicking on the Pricing link
- Verifying form elements are visible

This test serves as a starting point for candidates to expand upon during the interview.

## Key Features

### Global Exception Handling
The project includes global exception handling in `support/e2e.js` to prevent external JavaScript errors from failing tests.

## Interview Guidelines for Candidates

During the interview, you may be asked to:

1. **Add new test cases** - Expand test coverage by adding new test scenarios
2. **Refactor tests** - Organize code using Page Object Model or helper functions
3. **Debug failing tests** - Troubleshoot and fix broken tests
4. **Improve test selectors** - Refactor element selectors for better reliability
5. **Add assertions** - Enhance existing tests with additional verifications

## Resources

- [Cypress Documentation](https://docs.cypress.io)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Custom Commands](https://docs.cypress.io/api/cypress-api/custom-commands)

---

Good luck with your interview!
