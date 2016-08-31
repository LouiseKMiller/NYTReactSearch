// Include React 
var React = require('react');
var Search = require('./children/Search');
var Results = require('./children/Results');
var Saved = require('./children/Saved');

var Main = React.createClass({

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
					<Search />
				</div>

				<div className="row">					
					<Results />
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