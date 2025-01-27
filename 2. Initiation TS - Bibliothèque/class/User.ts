import { Book } from "./Book";

interface IUser {
    name: string;
    email: string;
    listBook: Book[]
}

export class User implements IUser {

    public name: string;
    public email: string;
    public listBook: Book[] = []

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    public addBook(book : Book) : void {
        this.listBook.push(book)
    }

    public removeBook(book : Book) : void {
        const index = this.listBook.findIndex(item => item.getId() === book.getId())
        if (index === -1) {
            console.log('Erreur aucun livres empruntés')
        } else {
            this.listBook.splice(index, 1)
        }
    }

}