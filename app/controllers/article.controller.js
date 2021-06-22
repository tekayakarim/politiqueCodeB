const db = require("../models");
const Article = db.article;

exports.ajouterArticle=async (req, res, next) => {
    delete req.body._id;
    const article = new Article({
        ...req.body
    });
    article.user=req.body.user;

    const imagePath = 'http://localhost:8000/images/' + req.file.filename;  
   
    
    article.imageUrlAuteur=imagePath;
    article.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.recupererArticle= (req, res, next) => {
    Article.findOne({ _id: req.params.id })
        .then(article => res.status(200).json(article))
        .catch(error => res.status(404).json({ error }));
};

exports.recupererArticles= (req, res, next) => {
    Article.find()
        .then(articles => res.status(200).json(articles))
        .catch(error => res.status(404).json({ error }));
};

exports.modifierArtcile= (req, res, next) => {
    Article.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.supprimerArticle= (req, res, next) => {
    Article.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};