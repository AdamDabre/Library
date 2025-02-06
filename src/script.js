function Library() {
    this.size = 0;
    this.books = [];

    this.addBook = function (newBook) {
        this.books.push(newBook);
        this.size = this.books.size;
    };

    this.displayBooks = function () {
        this.books.forEach((item) => {
            console.log(item);
        });
    };
}

function Book(name, page_count, completed) {
    this.name = name;
    this.page_count = page_count;
    this.completed = completed;
}

let library = new Library();
let book1 = new Book("Harry Potter", 872, false);
let book2 = new Book("James and Giant Peach", 231, true);
let book3 = new Book("My Legacy", 421, false);
let book4 = new Book("We Going On a Bear Hunt", 31, false);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

library.displayBooks();
