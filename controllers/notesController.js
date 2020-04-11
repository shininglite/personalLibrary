const express = require('express');
const router = express.Router();

const note = require("../models/note.js");

router.get("/api/book/notes/:bookTitle", (req, res) => {
    const bookTitle = req.params.bookTitle
    note.getBookNotes(bookTitle)
    .then(results => res.json(results))
    .catch(error => res.status(500).json(error))
});

router.post('/api/book/note', (req, res) => {
    const { note, bookId } = req.body;
    note.addBookNote(note, bookId)
    .then(() => res.status(200).json(true))
    .catch(error => res.status(500).json(error))
})

router.delete('/api/note/:id', (req, res) => {
    note.deleteNote(req.params.id)
    .then(() => res.status(200).json(true))
    .catch(error => res.status(500).json(error))
})

module.exports = router;