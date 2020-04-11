const orm = require("../config/orm.js");

class Note {
    getBookNotes(bookTitle){
        return orm.getBookNotesORM(bookTitle);
    }
    addBookNotes(note, bookId){
        return orm.addBookNotesORM(note, bookId);
    }
    deleteBookNote(noteId){
        return orm.deleteNoteORM(noteId);
    }
}

module.exports = new Note();