var express = require('express');
var router = express.Router();
var Movies = require('../controllers/apiController')

/******************
 * GET
 ******************/
router.get('/', (req, res) => {
    Movies.showAll()
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error))
})

router.get('/:idMovie', (req, res) => {
    let id = req.params.idMovie
    Movies.show(id)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error))
})

/******************
* POST
******************/
router.post('/', (req, res) => {
    let body = req.body;
    Movies.insert(body)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error))
})

/******************
* PUT
******************/
router.put('/:idMovie', (req, res) => {

})

/******************
* DELETE
******************/
router.delete('/:idMovie', (req, res) => {

})

module.exports = router;