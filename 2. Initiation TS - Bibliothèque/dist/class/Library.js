"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor(userList, bookList) {
        this.userList = userList;
        this.bookList = bookList;
    }
    addUser(user) {
        this.userList.push(user);
    }
    removeUser(user) {
        const index = this.userList.findIndex(userTarget => userTarget.email === user.email);
        if (index === -1) {
            console.log('Utilisateur non présent en base');
        }
        else {
            this.userList.splice(index, 1);
        }
    }
    borrowBook(user, book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            user.addBook(book);
        }
        else {
            console.log("Ce livre n'est pas disponible");
        }
    }
    bringBackBook(user, book) {
        if (book.isAvailable) {
            console.log("Ce livre n'avait pas été emprunté");
        }
        else {
            book.isAvailable = true;
            user.removeBook(book);
        }
    }
}
exports.Library = Library;
