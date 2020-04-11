DROP DATABASE IF EXISTS library_db;
CREATE DATABASE library_db;

-- tells mysql that we are going to start interacting with library_db
USE library_db;

CREATE TABLE authors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(30) NOT NULL,
  lastName VARCHAR(30) NOT NULL
);

CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  coverPhoto VARCHAR(255),
  authorId INT NOT NULL,
  FOREIGN KEY (authorId) REFERENCES authors(id) ON DELETE CASCADE
);

CREATE TABLE notes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  note VARCHAR(255) NOT NULL,
  bookId INT NOT NULL,
  FOREIGN KEY (bookId) REFERENCES books(id)
);

INSERT INTO authors (firstName, lastName) VALUES ('J. K.', 'Rowling');
INSERT INTO authors (firstName, lastName) VALUES ('Mark', 'Twain');

INSERT INTO books (title, authorId, coverPhoto) VALUES ("Harry Potter and the Sorcerer\'s Stone", 1, 'https://m.media-amazon.com/images/I/41lnLrvBnML.jpg');

INSERT INTO books (title, authorId, coverPhoto) VALUES ('Harry Potter and the Chamber of Secrets', 1, 'https://m.media-amazon.com/images/I/51OZerWcGCL.jpg');

SELECT firstName, lastName, title 
FROM authors
INNER JOIN books
ON authors.id = books.authorId
