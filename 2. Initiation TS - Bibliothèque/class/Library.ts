import { User } from "./User";
import { Book } from "./Book";

export class Library {
    constructor(private userList: User[], private bookList: Book []) {

    }

    addUser(user: User) : void {
        this.userList.push(user)
    }

    removeUser(user: User) : void {
        const index = this.userList.findIndex(userTarget => userTarget.email === user.email)
        if (index === -1) {
            console.log('Utilisateur non présent en base')
        } else {
            this.userList.splice(index, 1)
        }
    }

    borrowBook(user: User, book: Book) : void {
        if(book.isAvailable) {
            book.isAvailable = false
            user.addBook(book)
        } else {
            console.log("Ce livre n'est pas disponible")
        }
    }

    bringBackBook(user: User, book: Book) : void {
        if(book.isAvailable) {
            console.log("Ce livre n'avait pas été emprunté")
        } else {
            book.isAvailable = true
            user.removeBook(book)
        }
    }
}