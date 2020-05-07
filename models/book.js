// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

class Book {
  getAllBooks() {
    return orm.innerJoin(['books.id', 'firstName', 'lastName', 'title', 'coverPhoto'], 'authors', 'books', 'id', 'authorId')
  }
  getOneBook(bookId){
    return orm.innerJoinOne(['books.id', 'firstName', 'lastName', 'title', 'coverPhoto'], 'authors', 'books', 'id', 'authorId', bookId)
  }
  addBook(values) {
    return orm.create("books", ['title', 'coverPhoto', 'authorId'], values)
  }
};

// Export the database functions for the controller.
module.exports = new Book();