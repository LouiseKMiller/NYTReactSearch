// Include React 
var React = require('react');

var Search = React.createClass({

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

					</div>
				</div>
			</div>
		)
	}
});
	
module.exports = Search;