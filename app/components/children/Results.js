// Include React 
var React = require('react');
var OneResult = require('./grandkids/OneResult');


var Results = React.createClass({

	showResults: function(){
		if (this.props.nycData.index != null) {
			console.log("returning ", this.props.nycData[0].title);
			return this.props.nycData[0].title;
		}

	},

	// Here we render the function
	render: function(){


		return(


			<div className="col-sm-12">
			<br />

				<div className="panel panel-primary">

					<div className="panel-heading">
						<h3 className="panel-title">
							<strong>Top Articles</strong>
						</h3>
					</div>

					<div className="panel-body">					
					{/* Here we use a map function to loop through an array in JSX*/}
					{this.props.nycData.map(function(result, i)
						{
							return <p key={i}>{result.title}</p> 
						}
					)}
					</div>

				</div>
			</div>

		)
	}
});

module.exports = Results;

						// {this.props.nycData.map(function(result, i)
						// 	{
						// 		return <OneResult key={i} data={result}/>
						// 	}
						// )}
