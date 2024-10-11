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
