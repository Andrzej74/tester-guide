# Przypadki Testowe - API

## TC-01: Rejestracja użytkownika
**Opis**: Sprawdzenie, czy użytkownik może zarejestrować się z poprawnym adresem e-mail i hasłem.
- **Warunki wstępne**: Serwer API działa, baza danych jest dostępna.
- **Kroki**:
  1. Wykonaj żądanie `POST` na `/api/register` z następującym ciałem:
     ```json
     {
       "email": "testuser@example.com",
       "password": "testpassword"
     }
     ```
  2. Sprawdź odpowiedź API.
  3. Zweryfikuj, czy użytkownik został dodany do bazy danych.
- **Oczekiwany wynik**:  
  - API zwraca status `201 Created`.
  - Odpowiedź zawiera pole `userId`.
  - Użytkownik jest zapisany w bazie danych.

---

## TC-02: Rejestracja użytkownika z istniejącym adresem e-mail
**Opis**: Sprawdzenie, czy użytkownik nie może zarejestrować się, jeśli używa już istniejącego adresu e-mail.
- **Warunki wstępne**: Użytkownik `testuser@example.com` już istnieje w bazie danych.
- **Kroki**:
  1. Wykonaj żądanie `POST` na `/api/register` z następującym ciałem:
     ```json
     {
       "email": "testuser@example.com",
       "password": "newpassword"
     }
     ```
  2. Sprawdź odpowiedź API.
- **Oczekiwany wynik**:  
  - API zwraca status `400 Bad Request` lub `409 Conflict`.
  - Odpowiedź zawiera wiadomość o błędzie np. `Email already exists`.

---

## TC-03: Logowanie użytkownika
**Opis**: Sprawdzenie, czy użytkownik może zalogować się z poprawnymi danymi uwierzytelniającymi.
- **Warunki wstępne**: Użytkownik `testuser@example.com` jest zarejestrowany w systemie z hasłem `testpassword`.
- **Kroki**:
  1. Wykonaj żądanie `POST` na `/api/login` z następującym ciałem:
     ```json
     {
       "email": "testuser@example.com",
       "password": "testpassword"
     }
     ```
  2. Sprawdź odpowiedź API.
- **Oczekiwany wynik**:  
  - API zwraca status `200 OK`.
  - Odpowiedź zawiera token JWT lub inne dane uwierzytelniające.

---

## TC-04: Logowanie z niepoprawnym hasłem
**Opis**: Sprawdzenie, czy użytkownik nie może zalogować się z niepoprawnym hasłem.
- **Warunki wstępne**: Użytkownik `testuser@example.com` jest zarejestrowany w systemie z hasłem `testpassword`.
- **Kroki**:
  1. Wykonaj żądanie `POST` na `/api/login` z następującym ciałem:
     ```json
     {
       "email": "testuser@example.com",
       "password": "wrongpassword"
     }
     ```
  2. Sprawdź odpowiedź API.
- **Oczekiwany wynik**:  
  - API zwraca status `401 Unauthorized`.
  - Odpowiedź zawiera wiadomość o błędzie np. `Invalid credentials`.
