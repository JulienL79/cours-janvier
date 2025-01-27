interface IBook {
    title: string;
    author: string;
    publishedDate: Date;
    isAvailable: boolean;
    id: string;
}

export class Book implements IBook {
    public title: string
    public author: string
    public publishedDate : Date
    public isAvailable: boolean;
    public id: string

    constructor(title: string, author: string, publishedDate : Date, id: string) {
        this.title = title;
        this.author = author;
        this.publishedDate = publishedDate
        this.id = id
        this.isAvailable = true
    }

    public getId() : string {
        return this.id
    }
}