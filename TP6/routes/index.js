var express = require('express');
var router = express.Router();

/**
 * GETS
 */

//Get homepage
router.get('/', (req, res, next) => {
  res.render('index');
});

//Get list of regions
router.get('/regions', (req, res, next) => {
  res.render('regions');
});

//Get specific song page
router.get('/song/:id', (req, res, next) => {
  res.render('song');
})

//Get song form page
router.get('/addsong', (req, res, next) => {
  res.render('addsong');
})

/**
 * POSTS
 */

//post new song

/**
* DELETE
*/

//delete song


module.exports = router;
