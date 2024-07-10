"use strict";
// Define a class named `Book`. Create an instance of this class.
class Book {
    constructor(author, title) {
        this.author = author;
        this.title = title;
        Book.numOfBooks += 1;
    }
    getDetails() {
        console.log(this);
        console.log(`The author of ${this.title} is ${this.author}`);
    }
}
Book.numOfBooks = 0;
;
class Ebook extends Book {
    constructor(author, title, filesize) {
        super(author, title);
        this.filesize = filesize;
    }
    getDetails() {
        console.log(this);
        console.log(`The author of ${this.title} is ${this.author} and file size is ${this.filesize}`);
    }
    getNumOfBooks() {
        return Book.numOfBooks;
    }
}
let Book1 = new Book("Collean Hover", "this girl");
let Book2 = new Book("Nimra Ahmed", "Peere kamil");
console.log(Book1.author);
Book1.getDetails();
Book2.getDetails();
let Ebook1 = new Ebook("Collean Hover", "this girl", "10GB");
console.log(Ebook1);
Ebook1.getDetails();
console.log(Ebook1.getNumOfBooks());
