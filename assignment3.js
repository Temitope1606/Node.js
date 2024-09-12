class Book {
  #isbn;
  constructor(title, author, isbn, available = true) {
    this.title = title;
    this.author = author;
    this.#isbn = isbn;
    this.available = available;
  }

  borrowBook() {
    if (this.available) {
      this.available = false;
      console.log(
        `You've successfully borrowed ${this.title} by ${
          this.author
        } with ISBN number ${this.#isbn}`
      );
    } else {
      console.log(
        `Oops, ${this.title} by ${this.author} is not available right now!!`
      );
    }
  }

  returnBook() {
    this.available = true;
  }

  // Getter for isbn
  get isbn() {
    return this.#isbn;
  }
}

// EXAMPLE FOR THE USAGE OF 'Book' class
const book = new Book(
  "Purple Hibiscus",
  "Chimamanda Ngozi Adichie",
  "9780007189885"
);
book.borrowBook();
console.log(book.available);
book.borrowBook();

book.returnBook();
console.log(book.available);

// Library class
class Library {
  constructor(books = []) {
    this.books = books;
  }
  // Adds a new book
  addBook(book) {
    this.books.push(book); // adds a new book object to the books array
    console.log(`${book.title} by ${book.author} has been added!!`);
  }
  // Removes a book using the ISBN
  removeBook(isbn) {
    const initialLength = this.books.length;
    // console.log(initialLength);
    this.books = this.books.filter((book) => book.isbn !== isbn); // exclude only those books whose ISBN
    // is not equal to the one provided for removal for the new array.
    if (this.books.length < initialLength) {
      console.log(`The book with ISBN ${isbn} has been removed`);
    } else {
      console.log(`The book with ISBN ${isbn} wasn't found`);
    }
  }
  // Find a book by its title
  findBookByTitle(title) {
    const bookFound = this.books.find(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    ); // we need to compare so it won't
    // keep returning the first value and also convert to lowercase to make the titles to be in lowercase
    if (bookFound) {
      return bookFound;
    } else {
      console.log(`${title} wasn't found..`);
    }
  }
}

class DigitalLibrary extends Library {
  constructor(books = []) {
    super(books);
  }
  downloadBook(isbn) {
    const bookDownload = this.books.find((book) => book.isbn === isbn);
    if (bookDownload) {
      console.log(
        `The book with ISBN ${isbn} titled "${bookDownload.title}" is being downloaded..`
      );
    } else {
      console.log(
        `The book with ISBN ${isbn} isn't available for download at the moment.`
      );
    }
  }
}

// EXAMPLE  FOR THE USAGE OF 'Library' AND 'Digital Library' class
const library = new Library();
const book1 = new Book("Things Fall Apart", "Chinua Achebe", "6545678909");
const book2 = new Book(
  "Half Of a Yellow Sun",
  "Chimamanda Ngozi Adichie",
  "62234678909"
);

library.addBook(book1);
library.addBook(book2);

library.removeBook("62234678909");
library.removeBook("62234VR09");

console.log(library.findBookByTitle("Things Fall Apart"));
library.findBookByTitle("Fire on the mountain");
library.findBookByTitle("Half Of a Yellow Sun"); // this won't show because it has previously been removed

const digitalLibrary = new DigitalLibrary();

digitalLibrary.addBook(book1);
digitalLibrary.addBook(book2);

digitalLibrary.downloadBook("6545678909");
digitalLibrary.downloadBook("62234678909");
digitalLibrary.downloadBook("8765432456789iytg");
