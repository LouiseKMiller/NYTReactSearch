// Include React
var React = require('react');
var Form = require('./children/Form');
var Results = require('./children/Results');
var Saved = require('./children/Saved');
var helpers = require('./utils/helpers.js');

var Main = React.createClass({
	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			searchTerms: {},
			results: [],
			history: [] /*Note how we added in this history state variable*/
		}
	},

	// This function allows childrens to update the parent.
	setTerms: function(term){
		this.setState({
			searchTerms: term
		})
	},

	// If the component changes (i.e. if a search is entered)...
	componentDidUpdate: function(prevProps, prevState){

		if(prevState.searchTerms != this.state.searchTerms){
			console.log("UPDATED");

			// Run the query for the address
			helpers.runQuery(this.state.searchTerms)
				.then(function(data){
					if (data != this.state.results)
					{
						console.log("Results", data);

						this.setState({
							results: data
						})

						// After we've received the result... then post the search term to our history.
						helpers.postResults(this.state.results)
							.then(function(data){
								console.log("Updated!");

							}.bind(this)
						)
					}
				}.bind(this))
		}
	},

	// The moment the page renders get the History
	// componentDidMount: function(){

	// 	// Get the latest history.
	// 	helpers.getHistory()
	// 		.then(function(response){
	// 			if (response != this.state.history){
	// 				console.log ("History", response.data);

	// 				this.setState({
	// 					history: response.data
	// 				})
	// 			}
	// 		}.bind(this))
	// },

	// Here we render the function
	render: function(){
		var style = {
			backgroundColor: '#20315A',
			color: 'white'
		};
		return(

			// Main Bootstrap Search
			<div className="container">

				<div className="jumbotron" style={style}>
					<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
				</div>


				<div className="row">
					<Form setTerms={this.setTerms}/>
				</div>

				<div className="row">
					<Results nytData={this.state.results}/>
				</div>

				<div className="row">
					<Saved />
				</div>



				<div className="row">
					<div className="col-sm-12">

						<hr/>
						<h5 className="text-center"><small>Made by Louise with lots and lots of <i className="fa fa-heart"></i></small></h5>

					</div>
				</div>

			</div>
		)
	}
});


module.exports = Main;