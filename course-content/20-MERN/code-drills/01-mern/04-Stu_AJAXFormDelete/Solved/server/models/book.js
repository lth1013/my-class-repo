const {Schema, model} = require("mongoose");

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: {type: String, default: "coming soon"},
  date: { type: Date, default: Date.now }
});

const Book = model("Book", bookSchema);

module.exports = Book;
