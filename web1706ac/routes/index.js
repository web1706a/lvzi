var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('<h3>WELCOME TO LVZI</h3>');
  res.end();
});

module.exports = router;
