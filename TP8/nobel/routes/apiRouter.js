var express = require('express');
var router = express.Router();
var Prize = require('../controllers/prizeController')
var APIResponse = require('../models/apiResponse');

/******************
 * GET
 ******************/
router.get('/', (req, res) => {
    let api = new APIResponse({ request: "get", message: "gottem", status: 200 }, [])
    res.jsonp(api);
})


module.exports = router;