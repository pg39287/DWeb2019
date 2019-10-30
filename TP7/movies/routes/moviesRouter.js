var express = require('express');
var router = express.Router();
var Movies = require('../controllers/movieController')

//GET list of movies
router.get('/', (req, res) => {
    Movies.showAll()
        .then(data => { res.render('../movies/movies', { movies: data }) })
        .catch(error => { res.render('error', { error: error }) })
})

//GET movie page
router.get('/:idMovie', (req, res) => {
    let id = req.params.idMovie;
    Movies.show(id)
        .then(data => { res.render('../movies/movie', { movie: data }) })
        .catch(error => { res.render('error', { error: error }) })
})

//POST Movie
router.post('/', (req, res) => {
    let body = req.body;
    Movies.insert(body)
        .then(() => { res.redirect('/') })
        .catch(() => { res.redirect('/') })
})

//PUT Movie
router.put('/:idMovie', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    Movies.update(id, body)
        .then(() => { res.redirect('/') })
        .catch(() => { res.redirect('/') })
})

//DELETE Movie
router.delete('/:idMovie', (req, res) => {
    let id = req.params.idMovie;
    Movies.delete(id)
        .then(() => { res.redirect('/') })
        .catch(() => { res.redirect('/') })
})

module.exports = router;