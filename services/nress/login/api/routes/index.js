var express = require('express');
var router = express.Router();
var lib = require ('../lib/lib')

/* GET home page. */
router.get('/', function(req, res, next) {
  lib.consoleOut('wth');
  lib.consolePrint('testing');
  res.render('index', { title: 'Express' });
});

module.exports = router;
//lib();

