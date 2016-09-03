// Include React
var React = require('react');
var helpers = require('./utils/helpers.js');
var Link = require('react-router').Link;

var Main = React.createClass({
	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			searchTerms: {},
			// searchResults holds headline, date and url
			searchResults: [],
			saveStatus: [],
			history: [] /*Note how we added in this history state variable*/
		}
	},

	// This function allows form child to update the main with new search terms.
	setTerms: function(term){
		this.setState({
			searchTerms: term
		})
	},

		// This function allows form child to update the main with new search terms.
	clearForm: function(){
		this.setState({
			searchResults: [],
			searchTerms: {}
		})
	},


	// This function allows form child to save an article.
	saveArticle: function(indx){
		var dat = {
			title: this.state.searchResults[indx].title,
			date: this.state.searchResults[indx].date,
			url: this.state.searchResults[indx].url
		};
		helpers.postArticle(dat)
		.then(function(savedArticle){
			console.log("savedArticle", savedArticle);
			var status = this.state.saveStatus;
			status[indx] = 1;

			this.setState({saveStatus:status});

			// After we've done the post... then get the updated history
			helpers.getSavedArticles()
				.then(function(response){
					console.log("Current History", response.data);
					if (response != this.state.history){
						console.log ("History", response.data);

						this.setState({
							history: response.data
						})
					}
				}.bind(this))	
		}.bind(this, indx))
	},

		// This function allows form child to save an article.
	delArticle: function(title){
		helpers.deleteArticle(title)
		.then(function(){
			helpers.getSavedArticles()
				.then(function(response){
				console.log("Current History", response.data);
				if (response != this.state.history){
					console.log ("History", response.data);

					this.setState({
						history: response.data
					})
				}
			}.bind(this))	
		}.bind(this))
	},

	// If the component changes (i.e. if a search is entered)...
	componentDidUpdate: function(prevProps, prevState){
		// if a search was entered in the form component
		if((prevState.searchTerms != this.state.searchTerms) 
			&& (Object.getOwnPropertyNames(this.state.searchTerms).length !== 0)) 
			{
			console.log("UPDATED SEARCH TERMS");
			if (this.state.searchTerms.searchTerm === "") {
				console.log ("need to clear form");
			} else {

				// Run the query for the news articles
				helpers.runQuery(this.state.searchTerms)
					.then(function(bundle){
						if (bundle.data != this.state.results)
						{
							console.log("Results", bundle.data);

							this.setState({
								searchResults: bundle.data,
								saveStatus: bundle.saveStatus
							})

						} // if statement
					}.bind(this)) // then(function(data))
			}; // inner if statement
		};  //if statement

	},

	// When page rendered, display what was saved in database
	componentDidMount: function(){

		// Get the latest history.
		helpers.getSavedArticles()
			.then(function(response){
				if (response != this.state.history){
					console.log ("History", response.data);

					this.setState({
						history: response.data
					})
				}
			}.bind(this))
	},

	// Here we render the function
	render: function(){
		var style = {
			backgroundColor: '#20315A',
			color: 'white'
		};
		var childrenWithProps = React.cloneElement(this.props.children, {
			setTerms: this.setTerms,
			clearForm: this.clearForm,
			nycData: this.state.searchResults,
			saves: this.state.saveStatus,
			saveArticle: this.saveArticle,
			savedArticles: this.state.history,
			delArticle: this.delArticle
		});
		return(

			// Main Bootstrap Search
			<div className="container">

				<div className="jumbotron" style={style}>
					<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
				</div>

				<div>
					<ul>
						<li><Link to="/Form">Form</Link></li> 
						<li><Link to="/Results">Results</Link></li> 
						<li><Link to="/Saved">Saved</Link></li> 
					</ul>

				</div>
				<div className="row">
					
					{/*This code will dump the correct Child Component*/}
					{childrenWithProps}

				</div>


				<div className="row">
					<div className="col-sm-12">

						<hr/>
						<h5 className="text-center"><small>Made by Louise with lots and lots of <i className="fa fa-wrench"></i></small></h5>

					</div>
				</div>

			</div>
		)
	}
});


module.exports = Main;