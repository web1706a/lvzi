var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<h3>WELCOME TO LVZI</h3>');
});

module.exports = router;
