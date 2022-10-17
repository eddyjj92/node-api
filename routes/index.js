var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(["Hola Rizbel Bienvenido a nuestra primera app con Node, Express y React"]);
});

module.exports = router;
