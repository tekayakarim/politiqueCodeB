const mongoose = require('mongoose');

const Article = mongoose.model(
    "Article",
    new mongoose.Schema({
        textArticle: { type: String, required: true },
        typeArticle: { type: String, required: true },
        nomLivre: { type: String, required: true },
        dateSortieLivre: { type: Date, required: true, default: Date.now },
        nomAuteur: { type: String, required: true },
        imageUrlAuteur: { type: Buffer, required: true },
        user:
         
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "User"
            }
          
    })
  );
  
  module.exports = Article;
  