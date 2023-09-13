class Book {
  #isbn;
  title;
  author;
  yearPublished;

  constructor(isbn, title, author, yearPublished) {
    this.#isbn = isbn;
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
  }

  getIsbn() {
    return this.#isbn;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    if (book instanceof Book) {
      this.books.push(book);
    } else {
      throw new Error("Only Book instances can be added to the library.");
    }
  }

  getBooks() {
    return this.books;
  }

  findByIsbn(isbn) {
    return this.books.find((book) => book.getIsbn() === isbn);
  }

  findByTitle(title) {
    return this.books.find((book) => book.title === title);
  }

  findByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  }

  findByYearPublished(yearPublished) {
    return this.books.filter((book) => book.yearPublished === yearPublished);
  }
}

const book1 = new Book("1234567890", "The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 1979);
const book2 = new Book("9876543210", "The Lord of the Rings", "J.R.R. Tolkien", 1954);

const library = new Library();
library.addBook(book1);
library.addBook(book2);

const allBooks = library.getBooks();
const bookByIsbn = library.findByIsbn("1234567890");
const bookByTitle = library.findByTitle("The Lord of the Rings");
const booksByAuthor = library.findByAuthor("Douglas Adams");
const booksByYearPublished = library.findByYearPublished(1954);

console.log(allBooks);
console.log(bookByIsbn);
console.log(bookByTitle);
console.log(booksByAuthor);
console.log(booksByYearPublished);