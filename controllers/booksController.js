const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/api/books', (req, res) => {
  Book.getAllBooks()
  .then(results => res.json(results))
  .catch(error => res.json(error))
});

router.get('/api/book/:id', (req, res) => {
  const bookId = req.params.id;
  Book.getOneBook(bookId)
  .then(results => res.json(results))
  .catch(error => res.json(error))
})

router.post('/api/book/new', (req, res) => {
  const { title, coverPhoto, authorId } = req.body;

  Book.addBook([title, coverPhoto, authorId])
  .then(() => res.status(200).json(true))
  .catch(error => res.status(500).json(error))
})

module.exports = router;