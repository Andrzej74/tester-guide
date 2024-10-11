# Test Plan

## 1. Test Objective
The objective of the tests is to verify the correct functioning of an application that introduces users to techniques used by automated testers utilizing Cypress. The tests aim to check user functions, interface elements, and application state persistence.

## 2. Scope of Testing
The scope of testing includes verification of key application features, such as:
- **User Functions**: Registration, login, logout, and user state persistence.
- **User Interface (UI) Elements**: Verification of button, link, and form functionality.
- **Page Content**: Verification of correct display of content, headers, and course materials.
- **Navigation and Breadcrumbs**: Testing the functionality of forward/backward navigation, breadcrumbs, and module transitions.
- **Modules and Progress Saving**: Verification of module selection accuracy, user progress saving, and state restoration after re-login.

## 3. Types of Tests
- **End-to-End (e2e) Tests**: Testing complete user flows, from registration to progress saving.
- **Functional Tests**: Verification of core application functions such as login, registration, and navigation.
- **UI Tests**: Checking the correct display and functionality of UI elements.
- **Regression Tests**: Tests aimed at ensuring that new changes do not introduce bugs into existing features.

## 4. Test Environment
- **Local Development Environment**: Tests run locally during application development to quickly identify bugs.
- **Production Environment**: Tests run on the production version before making the application available to users.

## 5. Test Completion Criteria
- **UI is Correct**: All user interface elements function as expected.
- **User Paths are Uninterrupted**: All tested user paths function without errors.
- **Features Function Properly**: All application features pass the tests successfully.
- **No Regression**: All regression tests pass successfully after the introduction of new features.

## 6. Test Schedule (optional)
- **Local Testing Phase**: Ongoing testing during application development.
- **Pre-Production Testing Phase**: Tests conducted before deployment to the production environment.
- **Production Testing**: Final verification of the application in the production environment.

## 7. Testing Tools
- **Cypress**: The main tool for automating end-to-end, functional, and UI tests.
- **Postman**: A tool for API testing.
- **Node.js**: Version 16.x – runtime environment for Cypress and the project.
- **GitHub Actions** (optional): CI/CD tool for automatically running tests.
- **Firebase**: Backend platform used for managing user authentication and application state.
- **Browsers (Chrome, Firefox)**: Browsers used for running tests.
- **VS Code / IDE**: Code editor for writing tests and managing the project.
