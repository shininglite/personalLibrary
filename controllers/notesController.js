const express = require('express');
const router = express.Router();
const Note = require('../models/note');

router.get('/api/book/notes/:id', (req, res) => {
  const bookId = req.params.id;

  Note.getBookNotes(bookId)
  .then(results => res.json(results))
  .catch(error => {
    console.log(error)
    res.status(500).json(error)
  })
});

router.post('/api/book/note', (req, res) => {
  const { note, bookId } = req.body;
  
  Note.addBookNote([note, bookId])
  .then(() => res.status(200).json(true))
  .catch(error => res.status(500).json(error))
});

router.delete('/api/note/:id', (req, res) => {
  Note.deleteBookNote(req.params.id)
  .then(() => res.status(200).json(true))
  .catch(error => res.status(500).json(error))
});

module.exports = router;