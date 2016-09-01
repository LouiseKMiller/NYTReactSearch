
var path = require('path');
var express = require('express');
var router = express.Router();


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

router.post('/api', function(req,res){
	var data = [];
	for (var i=0; i<res.length; i++){
		data.push({
		   title: res[i].title,
		   date: res[i].date,
		   url: res[i].url
		})
	};
	Article.create(data,function(err, docs){
		if  (err){
			console.log(err);
		} else {
			console.log("docs saved to database");
		};
	}); // end of Article.create
	res.send("Scrape Complete");
});

module.exports = router;