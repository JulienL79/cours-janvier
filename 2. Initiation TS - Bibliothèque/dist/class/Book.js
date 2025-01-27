"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, publishedDate, id) {
        this.title = title;
        this.author = author;
        this.publishedDate = publishedDate;
        this.id = id;
        this.isAvailable = true;
    }
    getId() {
        return this.id;
    }
}
exports.Book = Book;
