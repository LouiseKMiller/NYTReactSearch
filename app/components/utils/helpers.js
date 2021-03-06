// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// This variable will be pre-programmed with our authentication key (the one we received when we registered)
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Based on the queryTerm we will create a queryURL
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

// Array to hold the various article info
var articleCounter = 0;

// Helper Functions (in this case the only one is runQuery)
var helpers = {

	// This function serves our purpose of running the query to geolocate.
	runQuery: function(terms){
		console.log("running query with: ", terms);

		// Search Terms
		var queryURL = queryURLBase + terms.searchTerm;
		const numResults = 5;
		var startYear = terms.startYear;
		var endYear = terms.endYear;

		// If the user provides a startYear -- the startYear will be included in the queryURL
		if (parseInt(startYear)) {
			queryURL = queryURL + "&begin_date=" + startYear + "0101";
		}

		// If the user provides a startYear -- the endYear will be included in the queryURL
		if (parseInt(endYear)) {
			queryURL = queryURL + "&end_date=" + endYear + "0101";
		}
		console.log('queryURL', queryURL)
		return axios.get(queryURL)
			.then(function(results) {
				console.log("results: ", results);
				var data = [];
				var saved = [];
				for (var i=0; i<numResults; i++) {
					data.push(
						{
						title: results.data.response.docs[i].headline.main,
						date: results.data.response.docs[i].pub_date,
						url: results.data.response.docs[i].web_url
						}
					);
					saved.push(0);
				};
				console.log("data", data);
				console.log("saved", saved);
				var bundle = {
					data: data,
					saveStatus: saved};
				return bundle;
			});
	},

	// This function hits our own server to retrieve the record of query results
	getSavedArticles: function(){

		return axios.get('/api')
			.then(function(response){

				console.log(response);
				return response;
			});
	},

	// This function posts new results to our database.
	postArticle: function(data){

		return axios.post('/api', data)
			.then(function(results){

				console.log("Posted to MongoDB");
				console.log("results", results);
				return(results);
			})
	},

	// This function posts new results to our database.
	deleteArticle: function(data){
		console.log("here in deleteArticle",data);
		return axios({
			method: 'delete',
			url: '/api', 
			data: data})
			.then(function(results){

				console.log("Deleted from MongoDB");
				return(results);
			})
	}

}


// We export the helpers function
module.exports = helpers;