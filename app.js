// --- DOM-element ---
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const booksContainer = document.getElementById("booksContainer");

// --- Händelser ---
searchBtn.addEventListener("click", searchBooks);
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchBooks();
});

// --- Huvudfunktion: sök böcker ---
async function searchBooks() {
  const query = searchInput.value.trim();
  if (!query) {
    alert("Skriv in ett boknamn för att söka!");
    return;
  }

  booksContainer.innerHTML = "<p>Söker böcker...</p>";

  try {
    //  Open Library kräver ingen API-nyckel, men vi använder fetch med 'cors' för säkerhet
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`,
      { mode: "cors" }
    );

    if (!response.ok) throw new Error("Kunde inte hämta data från API:t");

    const data = await response.json();

    // Om inga böcker hittas
    if (data.docs.length === 0) {
      booksContainer.innerHTML = "<p>Inga böcker hittades. Försök igen!</p>";
      return;
    }

    // Visa de första 12 resultaten
    booksContainer.innerHTML = "";
    data.docs.slice(0, 12).forEach((book) => {
      const coverId = book.cover_i;
      const imageUrl = coverId
        ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
        : "https://via.placeholder.com/150x220?text=Ingen+bild";

      const div = document.createElement("div");
      div.classList.add("book");
      div.innerHTML = `
        <img src="${imageUrl}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>${book.author_name ? book.author_name[0] : "Okänd författare"}</p>
      `;
      booksContainer.appendChild(div);
    });
  } catch (error) {
    console.error("Fel vid hämtning:", error);
    booksContainer.innerHTML =
      "<p>Ett fel uppstod vid hämtning av böcker. Försök igen senare.</p>";
  }
}
