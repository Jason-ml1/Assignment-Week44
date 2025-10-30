# 📚 Book Explorer

## Beskrivning
*Book Explorer* är en enkel webapp där användare kan söka efter böcker via *Open Library API*. Appen hämtar bokinformation dynamiskt och visar titel, författare och omslagsbild.

Den är byggd med *HTML, CSS och JavaScript*, och visar hur man kan interagera med ett publikt API direkt från frontend utan server eller databas.

## Funktioner
- Sök efter böcker med ett namn eller sökord.
- Visar dynamiskt resultat som kort med titel, författare och omslagsbild.
- Responsiv layout med *CSS Grid*, fungerar på både dator och mobil.
- Felhantering: visar meddelande om inga böcker hittas eller om API:t inte svarar.
- *JavaScript fetch()* används med `mode: "cors"` för att hämta data från Open Library.

## Tekniker
- *HTML*: Struktur och semantiska element.
- *CSS*: Responsiv layout, grid för bokkort, hover-effekter.
- *JavaScript*:
  - Använder `fetch()` för att hämta data via *GET* från Open Library.
  - Dynamisk rendering av bokkort.
  - Felhantering via `try/catch`.
  - Interaktiv sökning med knapp och Enter-tangent.

## API Information
- *API:* [Open Library Search API](https://openlibrary.org/developers/api)
- Ingen API-nyckel krävs.
- CORS hanteras med `mode: "cors"` i `fetch()`.

## Användning
1. Öppna `index.html` i en webbläsare via *WebStorm lokal server* (högerklick → Open in Browser).
2. Skriv ett sökord (t.ex. “Harry Potter”) i sökfältet.
3. Klicka på *Sök* eller tryck Enter.
4. Resultaten visas som kort med titel, författare och bild.

## Exempel
- Sök: `"Harry Potter"` → visar böcker med omslag, titel och författare.
