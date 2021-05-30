const controller = require("../controllers/article.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
app.post('/ajouterArticle',controller.ajouterArticle);

app.get('/recupererArticle/:id',controller.recupererArticle);

app.get('/recupererArticles',controller.recupererArticles);

app.put('/modifierArtcile/:id',controller.modifierArtcile);

app.delete('/supprimerArticle/:id',controller.supprimerArticle);

};