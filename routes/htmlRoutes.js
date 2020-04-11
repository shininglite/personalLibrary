const path = require('path');

module.exports = (app) => {

  app.get('/library', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/library.html'))
  });

  app.get('/bookDetail/:title', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/bookDetail.html'))
  });

  app.get('/addBook', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/addBook.html'))
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  });
}