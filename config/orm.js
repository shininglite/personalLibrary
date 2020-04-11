var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
class ORM {
  constructor(connection) {
    this.connection = connection
  }

  getAllBooksORM() {
    // returns a promise so that when it's called we can use .then() and .catch()
    console.log("connected")
    return this.connection.query('SELECT firstName, lastName, title, coverPhoto FROM authors INNER JOIN books ON authors.id = books.authorId')
  }

  getOneBookORM(bookTitle) {
    return this.connection.query('SELECT books.id, firstName, lastName, title, coverPhoto FROM authors INNER JOIN books ON authors.id = books.authorId WHERE books.title=?', [bookTitle])
  }

  getBookNotesORM(bookTitle) {
    return this.connection.query('SELECT notes.id, note FROM notes INNER JOIN books ON books.id = notes.bookId WHERE books.title=?', [bookTitle])
  }

  addBookORM(title, coverPhoto, authorId) {
    console.log("added book");
    return this.connection.query('INSERT INTO books SET ?',
      {
        title,
        authorId,
        coverPhoto
      })
  }

  addBookNoteORM(note, bookId) {
    return this.connection.query('INSERT INTO notes SET ?',
      {
        note,
        bookId
      })
  }

  deleteNoteORM(noteId) {
    return this.connection.query('DELETE FROM notes WHERE id=?',
      [noteId])
  }
  // printQuestionMarks(numberOfValuesOrColumns, type){
  //   const questionMarks = [];

  //   for (var i = 0; i < numberOfValuesOrColumns; i++) {
  //     if(type === 'cols'){
  //       questionMarks.push("??");
  //     } else {
  //       questionMarks.push("?")
  //     }

  //   }

  //   return questionMarks.join(', ');
  // }

  // innerJoin(colsToSelect, tableOne, tableTwo, tableOneCol, tableTwoCol) {
  //   // 'SELECT firstName, lastName, title, coverPhoto FROM authors INNER JOIN books ON authors.id = books.authorsId'

  //   const queryString = `SELECT ${this.printQuestionMarks(colsToSelect.length, 'cols')} FROM ?? INNER JOIN ?? ON ??.?? = ??.??`;

  //   return this.connection.query(queryString, [...colsToSelect, tableOne, tableTwo, tableOne, tableOneCol, tableTwo, tableTwoCol])
  // }
};

module.exports = new ORM(connection);

// const test = new ORM(connection);

// test.innerJoin(['firstName', 'lastName', 'title', 'coverPhoto'], 'authors', 'books', 'id', 'authorId')
// .then(results => console.log(results))
// .catch(err => console.log(err))