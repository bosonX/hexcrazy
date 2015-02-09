var express = require('express');
var router = express.Router();

var HexContainer = require('../public/javascripts/shapemaker.js').HexContainer;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', new HexContainer(15,4));
});

module.exports = router;
