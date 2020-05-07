const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/library', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/library.html'))
});

router.get('/bookDetail/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/bookDetail.html'))
});

router.get('/addBook', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/addBook.html'))
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;