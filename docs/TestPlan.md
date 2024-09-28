# Plan Testów

## 1. Cel Testów
Celem testów jest weryfikacja poprawności działania aplikacji, która zapoznaje użytkowników z technikami używanymi przez testerów automatyzujących korzystających z Cypressa. Testy mają na celu sprawdzenie funkcji użytkownika, interfejsu oraz zapisów stanu aplikacji.

## 2. Zakres Testów
Zakres testów obejmuje weryfikację kluczowych funkcji aplikacji, takich jak:
- **Funkcje użytkownika**: Rejestracja, logowanie, wylogowywanie oraz zapis stanu użytkownika.
- **Elementy interfejsu użytkownika (UI)**: Sprawdzenie poprawności działania przycisków, linków i formularzy.
- **Zawartość stron**: Weryfikacja poprawności wyświetlania treści, nagłówków i materiałów kursowych.
- **Nawigacja i breadcrumbs**: Sprawdzenie działania nawigacji przód/tył, breadcrumbsów i przejść między modułami.
- **Moduły i zapis postępu**: Weryfikacja poprawności wyboru modułów, zapisu postępów użytkownika i odtwarzania stanu po ponownym zalogowaniu.

## 3. Typy Testów
- **Testy end-to-end (e2e)**: Testowanie pełnych ścieżek użytkownika, od rejestracji po zapis postępów.
- **Testy funkcjonalne**: Weryfikacja podstawowych funkcji aplikacji, takich jak logowanie, rejestracja i nawigacja.
- **Testy UI**: Sprawdzenie poprawności wyświetlania i działania elementów interfejsu użytkownika.
- **Testy regresyjne**: Testy mające na celu sprawdzenie, czy nowe zmiany nie wprowadziły błędów do istniejących funkcji.

## 4. Środowisko Testowe
- **Lokalne środowisko deweloperskie**: Testy uruchamiane lokalnie podczas rozwoju aplikacji, aby szybko identyfikować błędy.
- **Środowisko produkcyjne**: Testy uruchamiane na wersji produkcyjnej przed udostępnieniem aplikacji użytkownikom.

## 5. Kryteria Zakończenia Testów
- **UI jest prawidłowy**: Wszystkie elementy interfejsu użytkownika działają zgodnie z oczekiwaniami.
- **Ścieżki użytkownika są bez zakłóceń**: Wszystkie testowane ścieżki użytkownika działają bez błędów.
- **Funkcjonalności działają poprawnie**: Wszystkie funkcje aplikacji przechodzą testy pomyślnie.
- **Brak regresji**: Wszystkie testy regresyjne przechodzą pomyślnie po wprowadzeniu nowych funkcji.

## 6. Harmonogram Testów (opcjonalnie)
- **Faza testów lokalnych**: Bieżące testowanie podczas rozwoju aplikacji.
- **Faza testów przedprodukcyjnych**: Testy uruchamiane przed wdrożeniem na środowisko produkcyjne.
- **Testy produkcyjne**: Ostateczna weryfikacja aplikacji na środowisku produkcyjnym.

## 7. Narzędzia Testowe
- **Cypress**: Główne narzędzie do automatyzacji testów end-to-end, funkcjonalnych i UI. 
- **Node.js**: Wersja 16.x – środowisko uruchomieniowe dla Cypressa i projektu.
- **GitHub Actions** (opcjonalnie): Narzędzie CI/CD do automatycznego uruchamiania testów.
- **Firebase**: Platforma backendowa używana do zarządzania autoryzacją użytkowników i stanem aplikacji.
- **Przeglądarki (Chrome, Firefox)**: Przeglądarki używane do uruchamiania testów.
- **VS Code / IDE**: Edytor kodu do pisania testów i zarządzania projektem.