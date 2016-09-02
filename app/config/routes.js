
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
	Article.find({}).sort([['createDate', 'descending']])
		.exec(function(err, docs){
			if  (err){
				console.log(err);
			} else {
				console.log("****end of database search***")
				res.send(docs);
		}
	}) // end of Article.find
});

// change to save create date, and then sort in descending order
// Article.find({}).sort([['createDate' 'descending']]).limit(5).exec(function(err, doc){})

router.post('/api', function(req,res){
	var data = req.body;
	data.createDate = Date.now();
	Article.create(data,function(err, doc){
		if  (err){
			console.log(err);
		} else {
			console.log("doc saved to database");
			res.send(doc);
		};
	}); // end of Article.create
});

module.exports = router;