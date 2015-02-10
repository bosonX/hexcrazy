var express = require('express');
var router = express.Router();

var HexContainer = require('../public/javascripts/shapemaker.js').HexContainer;
var radius = 5;
var layers = 30;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', new HexContainer(radius,layers));
});


module.exports = router;
