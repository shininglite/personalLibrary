# Personal Library

## Description

Personal Library is an application that allows a user to create a collection of books. It demonstrates how to create server side routes and how to use database to add and delete items.

### Phase 1 - ORM
- Create an ORM with the following methods and properities
  Properties
    - connection

  Methods
    - innerJoin
      - returns an INNER JOIN query
    - create
      - returns an INSERT INTO query
    - delete
      - returns a DELETE FROM query

### Phase 2 - Models
- Book Model

  Methods:
  - getAllBooks
    - returns ORM.innerJoin
  - getOneBook
    - returns ORM.innerJoin
  - addBook
    - returns ORM.create
- Note Model

  Methods:
  - getBookNotes
    - returns ORM.innerJoin
  - addBookNote
    - returns ORM.create
  - deleteBookNote
    - returns ORM.delete

### Phase 3 - Controllers
  - Book Controller
    - GET route for returning all books
    - GET route for returning one book
    - POST route for adding a book
    
  - Note Controller
    - GET route for returning all notes for one book
    - POST route for adding a book note
    - DELETE route for deleting a note

### Deployment
Anyone can use this application at:
http://salty-chamber-38736.herokuapp.com/ 
(but be patient. I have a free account which may take 10 or 15 seconds to load the app.)

See the code for this project on GitHub at:
https://github.com/shininglite/personalLibrary

### Developer
Tom van Deusen