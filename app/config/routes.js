
var path = require('path');
var express = require('express');
var router = express.Router();


router.get('/', function(req,res){
	rres.sendFile('../../index.html', function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent');
    }
  });
})

module.exports = router;