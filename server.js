const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require('./routes/htmlRoutes')(app);


const bookRoutes = require("./controllers/booksController.js");
// const noteRoutes = require("./controllers/notesController.js");

app.use(bookRoutes);
// app.use(noteRoutes);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
});