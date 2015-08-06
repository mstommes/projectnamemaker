var express = require('express');
var router = express.Router();//Router has to be capitalized
var path = require('path');
var wordList = require('../public/data/words.json')

router.get("/data", function(req, res){
    res.json(wordList);
});

router.get("/*", function(req, res){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;