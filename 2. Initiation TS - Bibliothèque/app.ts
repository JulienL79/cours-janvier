import { User } from "./class/User";
import { Book } from "./class/Book";
import { Library } from "./class/Library";

const user1 = new User('Jean-Jacque', 'jj@gmail.com')
const user2 = new User('Jean-Claude', 'jc@gmail.com')
const user3 = new User('Jean-Marie', 'jm@gmail.com')

const book1 = new Book('Harry Potter 1', 'JK Rowling', new Date(2011), 'ABC1')
const book2 = new Book('Harry Potter 2', 'JK Rowling', new Date(2012), 'ABC2')
const book3 = new Book('Harry Potter 3', 'JK Rowling', new Date(2013), 'ABC3')

const library = new Library([user1, user2, user3], [book1, book2, book3])

library.borrowBook(user2, book1)

console.log(library)