# Test Cases - User Authentication and Account Management (UI)

## User Registration
**Description**: Verify if a user can register with a valid email address and password.

- **Preconditions**: 
  - The application is running.
  - User is on the home page.
  - The database is available.
  - The email `test2@test.pl` is not registered in the system.

- **Steps**:
  1. Click the "Register" button on the home page.
  2. Verify that the user is redirected to the registration page.
  3. Type `test2@test.pl` in the "Email" field.
  4. Type `Test1234` in the "Hasło" field (or "Password", if applicable).
  5. Click the "Zarejestruj się" (Register) button.

- **Expected Result**:
  - The user is redirected to the `/profile` page.
  - The text `Zalogowany jako test2@test.pl` is displayed.
  - The new user is saved in the database with the correct email and hashed password.

  ---

  ## User Registration with Invalid Email Format
**Description**: Verify if the registration fails when an invalid email format is used.

- **Preconditions**: 
  - The application is running.
  - User is on the registration page.
  - The database is available.

- **Steps**:
  1. Type `invalidEmail` (without `@` and domain) in the "Email" field.
  2. Type `Test1234` in the "Hasło" field.
  3. Click the "Zarejestruj się" button.

- **Expected Result**:
  - Registration fails.
  - The system displays an error message: "Niepoprawny format adresu e-mail."
  - The user is not saved in the database.

---

## User Registration with Short Password
**Description**: Verify if the registration fails when the password is too short (less than 8 characters).

- **Preconditions**: 
  - The application is running.
  - User is on the registration page.
  - The database is available.
  - The email `test2@test.pl` is not registered in the system.
  

- **Steps**:
  1. Type `test2@test.pl` in the "Email" field.
  2. Type `Test1` (shorter than 8 characters) in the "Hasło" field.
  3. Click the "Zarejestruj się" button.

- **Expected Result**:
  - Registration fails.
  - The system displays an error message: "Hasło musi mieć co najmniej 8 znaków."
  - The user is not saved in the database.

---

## User Registration with Long Password
**Description**: Verify if the registration fails when the password is too short (less than 8 characters).

- **Preconditions**: 
  - The application is running.
  - User is on the registration page.
  - The database is available.
  - The email `test2@test.pl` is not registered in the system.

- **Steps**:
  1. Type `test2@test.pl` in the "Email" field.
  2. Type `Test1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890` (longer than 128 characters) in the "Hasło" field.
  3. Click the "Zarejestruj się" button.

- **Expected Result**:
  - Registration fails.
  - The system displays an error message: "Hasło musi mieć co najmniej 8 znaków."
  - The user is not saved in the database.

---

## User Registration with Password Missing Uppercase Letter
**Description**: Verify if the registration fails when the password is missing an uppercase letter.

- **Preconditions**: 
  - The application is running.
  - User is on the registration page.
  - The database is available.
  - The email `test2@test.pl` is not registered in the system.

- **Steps**:
  1. Type `test2@test.pl` in the "Email" field.
  2. Type `test1234` (all lowercase) in the "Hasło" field.
  3. Click the "Zarejestruj się" button.

- **Expected Result**:
  - Registration fails.
  - The system displays an error message: "Hasło musi zawierać co najmniej jedną wielką literę."
  - The user is not saved in the database.

---

## User Registration with Password Missing Number
**Description**: Verify if the registration fails when the password does not contain a numeric character.

- **Preconditions**: 
  - The application is running.
  - User is on the registration page.
  - The database is available.
  - The email `test2@test.pl` is not registered in the system.

- **Steps**:
  1. Type `test2@test.pl` in the "Email" field.
  2. Type `TestPassword` (no numbers) in the "Hasło" field.
  3. Click the "Zarejestruj się" button.

- **Expected Result**:
  - Registration fails.
  - The system displays an error message: "Hasło musi zawierać co najmniej jedną cyfrę."
  - The user is not saved in the database.

---

## User Registration with Email Already in Use
**Description**: Verify if the registration fails when the email is already registered in the system.

- **Preconditions**: 
  - The application is running.
  - User is on the registration page.
  - The email `test2@test.pl` is already registered in the system.
  - The database is available.

- **Steps**:
  1. Type `test2@test.pl` in the "Email" field.
  2. Type `Test1234` in the "Hasło" field.
  3. Click the "Zarejestruj się" button.

- **Expected Result**:
  - Registration fails.
  - The system displays an error message: "Konto z podanym emailem istnieje."
  - The user is not registered again.

  ---

  ## User Login with Valid Credentials
**Description**: Verify if a user can log in with a valid email address and password.

- **Preconditions**: 
  - The application is running.
  - User is on the login page.
  - The email `test2@test.pl` is registered in the system with the password `Test1234`.
  - The database is available.

- **Steps**:
  1. Type `test2@test.pl` in the "Email" field.
  2. Type `Test1234` in the "Hasło" field.
  3. Click the "Zaloguj się" button.

- **Expected Result**:
  - The user is redirected to the `/profile` page.
  - The text `Zalogowany jako test2@test.pl` is displayed.

---

## User Login with Invalid Email
**Description**: Verify if the login fails when an invalid email format is used.

- **Preconditions**: 
  - The application is running.
  - User is on the login page.
  - The database is available.

- **Steps**:
  1. Type `invalidEmail` (without `@` and domain) in the "Email" field.
  2. Type `Test1234` in the "Hasło" field.
  3. Click the "Zaloguj się" button.

- **Expected Result**:
  - Login fails.
  - The system displays an error message: "Niepoprawny format adresu e-mail."

---

## User Login with Unregistered Email
**Description**: Verify if the login fails when the email is not registered in the system.

- **Preconditions**: 
  - The application is running.
  - User is on the login page.
  - The email `notregistered@test.pl` is not registered in the system.
  - The database is available.

- **Steps**:
  1. Type `notregistered@test.pl` in the "Email" field.
  2. Type `Test1234` in the "Hasło" field.
  3. Click the "Zaloguj się" button.

- **Expected Result**:
  - Login fails.
  - The system displays an error message: "Nie znaleziono użytkownika z tym adresem e-mail."

---

## User Login with Incorrect Password
**Description**: Verify if the login fails when the user provides an incorrect password.

- **Preconditions**: 
  - The application is running.
  - User is on the login page.
  - The email `test2@test.pl` is registered in the system.
  - The database is available.

- **Steps**:
  1. Type `test2@test.pl` in the "Email" field.
  2. Type `WrongPassword` in the "Hasło" field.
  3. Click the "Zaloguj się" button.

- **Expected Result**:
  - Login fails.
  - The system displays an error message: "Nieprawidłowe hasło."

---

## User Login with Empty Email Field
**Description**: Verify if the login fails when the email field is left empty.

- **Preconditions**: 
  - The application is running.
  - User is on the login page.
  - The database is available.

- **Steps**:
  1. Leave the "Email" field empty.
  2. Type `Test1234` in the "Hasło" field.
  3. Click the "Zaloguj się" button.

- **Expected Result**:
  - Login fails.
  - The system displays an error message: "Adres e-mail jest wymagany."

---

## User Login with Empty Password Field
**Description**: Verify if the login fails when the password field is left empty.

- **Preconditions**: 
  - The application is running.
  - User is on the login page.
  - The database is available.

- **Steps**:
  1. Type `test2@test.pl` in the "Email" field.
  2. Leave the "Hasło" field empty.
  3. Click the "Zaloguj się" button.

- **Expected Result**:
  - Login fails.
  - The system displays an error message: "Hasło jest wymagane."

---

## User Login with Both Email and Password Fields Empty
**Description**: Verify if the login fails when both the email and password fields are left empty.

- **Preconditions**: 
  - The application is running.
  - User is on the login page.
  - The database is available.

- **Steps**:
  1. Leave both the "Email" and "Hasło" fields empty.
  2. Click the "Zaloguj się" button.

- **Expected Result**:
  - Login fails.
  - The system displays an error message: "Adres e-mail i hasło są wymagane."

  ---

  ## Transition between Login and Register Pages
**Description**: Verify if a user can navigate between the login page and the registration page using the provided links.

- **Preconditions**: 
  - The application is running.
  - User is on the login page.

- **Steps**:
  1. Verify that the login page is displayed.
  2. Click the "Zarejestruj się" (Register) link on the login page.
  3. Verify that the user is redirected to the registration page.
  4. Verify that the registration form is displayed with the "Email" and "Hasło" fields.
  5. Click the "Zaloguj się" (Login) link on the registration page.
  6. Verify that the user is redirected back to the login page.
  7. Verify that the login form is displayed with the "Email" and "Hasło" fields.

- **Expected Result**:
  - The user can navigate from the login page to the registration page and back to the login page without issues.
  - Both pages display the respective forms (login or registration) correctly, with the appropriate fields and buttons visible.

---

## User Logout
**Description**: Verify if a user can successfully log out and delete their account from the profile page.

- **Preconditions**: 
  - The application is running.
  - The user is logged in and on the profile page.
  - The database is available.
  - The user account `test2@test.pl` exists in the system.

### Logout Test
- **Steps**:
  1. Verify that the profile page is displayed with the message `Zalogowany jako test2@test.pl`.
  2. Click the "Wyloguj się" (Logout) button.
  3. Verify that the user is redirected to the home page.
  4. Verify that the login or register options are displayed instead of profile information.

- **Expected Result**:
  - The user is successfully logged out and redirected to the home page.
  - The login and register options are visible, indicating that no user is logged in.

---

### Account Deletion Test
- **Preconditions**: 
  - The user is logged in and on the profile page.
  - The user wants to delete their account.

- **Steps**:
  1. Verify that the profile page is displayed with the message `Zalogowany jako test2@test.pl`.
  2. Click the "Usuń konto" (Delete Account) button.
  3. Confirm the account deletion action in the confirmation prompt (if applicable).
  4. Verify that the user is redirected to the home page after account deletion.
  5. Attempt to log in again using `test2@test.pl` and the previous password.

- **Expected Result**:
  - The account is successfully deleted, and the user is redirected to the home page.
  - Attempting to log in with the deleted account credentials results in an error message: "Nie znaleziono użytkownika z tym adresem e-mail."

---

# Test Cases - API

## TC-01: User Registration
**Description**: Verify if a user can register with a valid email address and password.
- **Preconditions**: The API server is running, and the database is available.
- **Steps**:
  1. Send a `POST` request to `/api/register` with the following body:
     ```json
     {
       "email": "testuser@example.com",
       "password": "testpassword"
     }
     ```
  2. Check the API response.
  3. Verify that the user has been added to the database.
- **Expected Result**:  
  - The API returns status `201 Created`.
  - The response contains a `userId` field.
  - The user is saved in the database.

---

## TC-02: Registration with an Existing Email Address
**Description**: Verify if a user cannot register using an already existing email address.
- **Preconditions**: The user `testuser@example.com` already exists in the database.
- **Steps**:
  1. Send a `POST` request to `/api/register` with the following body:
     ```json
     {
       "email": "testuser@example.com",
       "password": "newpassword"
     }
     ```
  2. Check the API response.
- **Expected Result**:  
  - The API returns status `400 Bad Request` or `409 Conflict`.
  - The response contains an error message like `Email already exists`.

---

## TC-03: User Login
**Description**: Verify if a user can log in with valid credentials.
- **Preconditions**: The user `testuser@example.com` is registered in the system with the password `testpassword`.
- **Steps**:
  1. Send a `POST` request to `/api/login` with the following body:
     ```json
     {
       "email": "testuser@example.com",
       "password": "testpassword"
     }
     ```
  2. Check the API response.
- **Expected Result**:  
  - The API returns status `200 OK`.
  - The response contains a JWT token or other authentication data.

---

## TC-04: Login with Incorrect Password
**Description**: Verify if a user cannot log in with an incorrect password.
- **Preconditions**: The user `testuser@example.com` is registered in the system with the password `testpassword`.
- **Steps**:
  1. Send a `POST` request to `/api/login` with the following body:
     ```json
     {
       "email": "testuser@example.com",
       "password": "wrongpassword"
     }
     ```
  2. Check the API response.
- **Expected Result**:  
  - The API returns status `401 Unauthorized`.
  - The response contains an error message like `Invalid credentials`.
