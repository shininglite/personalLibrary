const express = require('express');
const router = express.Router();

const book = require("../models/book.js");

router.get('/api/books/', (req, res) => {
    book.getAllBooks()
        .then(results => res.json(results))
        .catch(error => res.json(error))
})

router.get('/api/book/:name', (req, res) => {
    const bookName = req.params.name;
    book.getOneBook(bookName)
        .then(results => res.json(results))
        .catch(error => res.json(error))
})

router.post('/api/book/new', (req, res) => {
    const { title, coverPhoto, authorId } = req.body;
    book.addBook(title, coverPhoto, authorId)
        .then(() => res.status(200).json(true))
        .catch(error => res.status(500).json(error))
});

module.exports = router;