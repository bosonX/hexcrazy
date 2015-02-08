var express = require('express');
var router = express.Router();

var hexmaker = require('../public/javascripts/shapemaker.js').hexmaker;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', hexmaker(5,30));
  // res.json(hexmaker(100,3));
});

module.exports = router;
