const orm = require("../config/orm.js");

class Book {
    getAllBooks() {
        return orm.getAllBooksORM()
    }
    getOneBook(bookTitle) {
        return orm.getOneBookORM(bookTitle);
    }
    addBook(title, coverPhoto, authorId) {
        return orm.addBookORM(title, coverPhoto, authorId)
    }
}

module.exports = new Book();