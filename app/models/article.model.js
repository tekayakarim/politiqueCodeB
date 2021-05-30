const mongoose = require('mongoose');

const Article = mongoose.model(
    "Article",
    new mongoose.Schema({
        text: { type: String, required: true },
        date: { type: Date, required: true, default: Date.now },
        imageUrl: { type: String, required: true },
        type: { type: String, required: true },
    })
  );
  
  module.exports = Article;
  