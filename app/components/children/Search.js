// Include React 
var React = require('react');

var num1 = 1;
var num5 = 5;
var num10 = 10;

var Search = React.createClass({

	// Here we set a generic state associated with the text being searched for
	getInitialState: function(){
		return {
			searchTerm: "",
			startYear: "",
			endYear: ""
			}
	},

	// This function will respond to the user input 
	handleChange: function(event){

    	// Here we create syntax to capture any change in text to the query terms (pre-search).
    	// See this Stack Overflow answer for more details: 
    	// http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);
    	console.log("newState is", newState);

	},

	// When a user submits... 
	handleClick: function(){

		console.log("CLICK");
		console.log(this.state.searchTerm);
		console.log(this.state.startYear);
		console.log(this.state.endYear);
		
		// Set the parent to have the search term
		this.props.setTerms(this.state);
		return false;
	},

	// Here we render the function
	render: function(){

		return(

			<div className="col-sm-12">
			<br/>

				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
					</div>
					<div className="panel-body">

						<form>

						  <div className="form-group">
						    <label>Search Term</label>
						    <input type="text" className="form-control" id="searchTerm" onChange= {this.handleChange} required/>
						  </div>


						  <div className="form-group">
						    <label>Start Year</label>
						    <input type="text" className="form-control" id="startYear" onChange= {this.handleChange} required/>
						  </div>


						  <div className="form-group">
						    <label>End Year</label>
						    <input type="text" className="form-control" id="endYear" onChange= {this.handleChange} required/>
						  </div>


						  <button type="button" className="btn btn-default" id="runSearch" onClick={this.handleClick}><i className="fa fa-search"></i>Search</button>
	  					  <button type="button" className="btn btn-default" id="clearAll"><i className="fa fa-trash"></i>Clear Results</button>

						</form>
					</div>
				</div>
			</div>
		)
	}
});
	
module.exports = Search;