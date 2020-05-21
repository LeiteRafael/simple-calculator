const {Router} = require('express');
const CalcController = require('./controller/CalcController')

const routes = Router();

routes.post('/calc', CalcController.calc);
routes.get('/index', function (req, res) {
    res.json('Pagina inicial do site ');
  });
  
module.exports = routes;
