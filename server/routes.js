var express = require('express');
var router = express.Router();
var dataController = require('./Controllers/dataController');

router.route('/data').get(function(req, res){
    res.send(dataController.getData());
});

module.exports = router;



