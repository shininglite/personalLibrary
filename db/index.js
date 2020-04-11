const connection = require('../config/connection');

class DB { 
  constructor(connection){
    this.connection = connection;
  }

  getAllBooks(){
    // returns a promise so that when it's called we can use .then() and .catch()
   return this.connection.query('SELECT firstName, lastName, title, coverPhoto FROM authors INNER JOIN books ON authors.id = books.authorId')
  }

  getOneBook(bookTitle){
    return this.connection.query('SELECT books.id, firstName, lastName, title, coverPhoto FROM authors INNER JOIN books ON authors.id = books.authorId WHERE books.title=?', [bookTitle])
  }

  getBookNotes(bookTitle){
   return this.connection.query('SELECT notes.id, note FROM notes INNER JOIN books ON books.id = notes.bookId WHERE books.title=?', [bookTitle])
  }

  addBook(title, coverPhoto, authorId){
   return this.connection.query('INSERT INTO books SET ?', 
     {
       title,
       authorId,
       coverPhoto
     })
  }

  addBookNote(note, bookId){
    return this.connection.query('INSERT INTO notes SET ?', 
     {
       note,
       bookId
     })
  }

  deleteNote(noteId){
   return this.connection.query('DELETE FROM notes WHERE id=?', 
     [noteId])
  }
}

module.exports = new DB(connection);