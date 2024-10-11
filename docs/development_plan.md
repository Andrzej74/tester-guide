# Development Plan and Iterative Schedule

## 1. Development Iterations

### Iteration 1: User Authorization
- **Features**: User registration and login.
- **Tests**: TC-01 (Registration), TC-02 (Registration with existing email), TC-03 (Login).
- **Objective**: Enable users to create accounts and log into the application.
  
### Iteration 2: Module Selection
- **Features**: Module selection page (course list) with checkboxes.
- **Tests**: Verification of module selection and deselection.
- **Objective**: Allow users to choose courses.

### Iteration 3: Navigation and Breadcrumbs
- **Features**: Add navigation between pages and breadcrumbs.
- **Tests**: Verify correct functioning of breadcrumbs and section transitions.
- **Objective**: Improve navigation within the application.

### Iteration 4: User State Persistence
- **Features**: Saving user progress in Firestore.
- **Tests**: Verify the accuracy of state saving and retrieval.
- **Objective**: Restore user state after re-login.

### Iteration 5: Deployment to Production Environment
- **Features**: Deploy the application on Firebase Hosting/Netlify/Vercel.
- **Tests**: Conduct tests in the production environment.
- **Objective**: Make the application available online.
