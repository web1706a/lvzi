var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('<h3>USER INDEX</h3>');
});

module.exports = router;
