"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, email) {
        this.listBook = [];
        this.name = name;
        this.email = email;
    }
    addBook(book) {
        this.listBook.push(book);
    }
    removeBook(book) {
        const index = this.listBook.findIndex(item => item.getId() === book.getId());
        if (index === -1) {
            console.log('Erreur aucun livres empruntés');
        }
        else {
            this.listBook.splice(index, 1);
        }
    }
}
exports.User = User;
