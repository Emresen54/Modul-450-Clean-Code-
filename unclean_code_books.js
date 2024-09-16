// Cleaned-up JavaScript file for handling book transactions

const books = [
  { id: 1, title: "Der alte Mann und das Meer", price: 10.5 },
  { id: 2, title: "Moby Dick", price: 12.3 },
  { id: 3, title: "1984", price: 8.5 },
];

// Function to retrieve a book by its ID
function getBookById(bookId) {
  for (const book of books) {
    if (book.id === bookId) {
      return book;
    }
  }
  return null; // Return null if the book is not found
}

// Function to add a new book to the collection
function addBook(title, price) {
  const maxId = books.reduce((max, book) => (book.id > max ? book.id : max), 0);
  books.push({ id: maxId + 1, title: title, price: price });
}

// Function to list all books with their prices
function listBooks() {
  books.forEach(book => console.log(`${book.title} - ${book.price}€`));
}

// Example function calls
const myBook = getBookById(2);
console.log(myBook);
addBook("Fahrenheit 451", 9.2);
listBooks();
