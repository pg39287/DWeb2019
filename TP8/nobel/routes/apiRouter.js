var express = require('express');
var router = express.Router();
var Prize = require('../controllers/prizeController')
var APIResponse = require('../models/apiResponse');

/******************
 * GET
 ******************/
router.get('/prizes', (req, res) => {
    Prize.getPrizes()
        .then(data => {
            res.status(200)
            res.jsonp(new APIResponse({
                request: "Get all prizes",
                message: "All prizes retrieved successfully",
                status: 200
            }, data));
        })
        .catch(error => {
            let json = new APIResponse({
                request: "Get all prizes",
                message: "An error occured in the database",
                status: 500,
            }, []);
            json.Request.Error = error;
            res.status(500)
            res.jsonp(json)
        })
})

router.get('/prizes/:id', (req, res) => { })

router.get('/categories', (req, res) => { })

router.get('/prizes?category=YYY', (req, res) => { })

router.get('/prizes?category=YYY&date=AAAA', (req, res) => { })

router.get('/laureates', (req, res) => { })

module.exports = router;