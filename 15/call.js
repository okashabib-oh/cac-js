import { User } from "./classes.js";

function setTitle(title) {
    this.title = title
}

function createBook(title, author, year) {
    setTitle.call(this, title)
    this.author = author;
    this.year = year;
}

const book = new createBook("the caliph", "Yen", 2005)
// console.log(book)

const createUser = new User("okashabib", "okk@go.co", "9k!2@-0")
console.log(createUser.crateUserId())