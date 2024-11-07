# Functional and Technical Requirements

## 1. Functional Requirements
- **User Registration**: Ability for users to create accounts using an email and password.
- **Login and Logout**: Users must be able to log in and out of the application. Due to fact that data aren't protected users are asked to not use their real data.
- **Course Module Selection**: Users can select and mark courses (modules) from a list.
- **Navigation**: The application should have simple navigation (forward/backward) within sections and breadcrumbs.
- **State Persistence**: The application must save the user's state, allowing them to continue learning from where they left off after re-login.
- **Interactivity**: The application should function as a presentation, allowing users to progress through steps and modules interactively.

## 2. Technical Requirements
- **Frontend**: React.js, React Router for managing routing.
- **Backend**: Firebase (Authentication, Firestore).
- **Testing**: Cypress for end-to-end (e2e) and functional tests.
- **Hosting**: Firebase Hosting / Netlify / Vercel.
- **Development Tools**: Node.js, npm, Git, GitHub Actions (CI/CD).
