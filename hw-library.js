class Book {
    #title;
    #author;
    #isAvailable;

    constructor(title, author) {
        this.#title = title;
        this.#author = author;
        this.#isAvailable = true;
    }

    getTitle() {
        return this.#title;
    }

    getAuthor() {
        return this.#author;
    }

    isAvailable() {
        return this.#isAvailable;
    }

    checkoutBook() {
        this.#isAvailable = false;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    checkoutBook(title) {
        const book = this.books.find((b) => b.getTitle() === title);
        if (book && book.isAvailable()) {
            book.checkoutBook();
            console.log(`Ви взяли книгу "${book.getTitle()}" автора ${book.getAuthor()}.`);
        } else {
            console.log(`Вибачте, "${title}" недоступна.`);
        }
    }

    viewAvailableBooks() {
        console.log("Доступні книги:");
        this.books.forEach((book) => {
            if (book.isAvailable()) {
                console.log(`- "${book.getTitle()}" автора ${book.getAuthor()}`);
            }
        });
    }
}

// Приклад використання:
const myLibrary = new Library();
const book1 = new Book("Конотопська Відьма", "Григорій Квітка-Основ'яненко");
const book2 = new Book("1984", "Джордж Орвелл");
const book3 = new Book("Великий Гетсбі", "Ф. Скотт Фіцджеральд");

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

myLibrary.viewAvailableBooks();
myLibrary.checkoutBook("1984");
myLibrary.viewAvailableBooks();
myLibrary.checkoutBook("1984"); // Це повинно вивести, що книга недоступна.
