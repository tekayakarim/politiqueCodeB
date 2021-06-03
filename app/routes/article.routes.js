const controller = require("../controllers/article.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
app.post('/article/ajouterArticle',controller.ajouterArticle);

app.get('/article/recupererArticle/:id',controller.recupererArticle);

app.get('/article/recupererArticles',controller.recupererArticles);

app.put('/article/modifierArtcile/:id',controller.modifierArtcile);

app.delete('/article/supprimerArticle/:id',controller.supprimerArticle);

};