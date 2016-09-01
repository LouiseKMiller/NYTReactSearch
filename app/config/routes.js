
var path = require('path');
var express = require('express');
var router = express.Router();
var Article = require('../../models/Article.js');


router.get('/', function(req,res){
	res.sendFile('../../index.html', function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent');
    }
  });
})

router.get('/api', function(req,res){
	console.log("get request received");
	Article.find({})
		.exec(function(err, docs){
			if  (err){
				console.log(err);
			} else {
				console.log("****end of database search***")
				res.send(docs);
		}
	}) // end of Article.find
});

router.post('/api', function(req,res){
	var data = req.body;
	Article.create(data,function(err, docs){
		if  (err){
			console.log(err);
		} else {
			console.log("docs saved to database");
		};
	}); // end of Article.create
	res.send("Saved Search");
});

module.exports = router;