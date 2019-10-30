var express = require('express');
var router = express.Router();
var Movies = require('../controllers/movieController')

//GET Movie page
router.get('/:idMovie', (req, res) => {
    let id = req.params.idMovie;
    Movies.show(id)
        .then(data => { res.render('../movies/movie', { movie: data }) })
        .catch(error => { res.render('error', { error: error }) })
})

//POST Movie
router.post('/', (req, res) => {
    res.render();
})

//PUT Movie
router.put('/:idMovie', (req, res) => {
    res.render();
})

//DELETE Movie
router.delete('/:idMovie', (req, res) => {
    res.render();
})

module.exports = router;