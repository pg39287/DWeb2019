var express = require('express');
var router = express.Router();

//Homepage
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
