// Include React 
var React = require('react');

var Saved = React.createClass({


	// When a user submits... 
	handleRemove: function(title){

		console.log("remove this", title);
		// Set the parent to have the search term

		this.props.delArticle({title: title});
		return false;
	},

	// Here we render the function
	render: function(){
		var savedArts = this.props.savedArticles;
		var savedArtsListing = savedArts.map(function(result, i){
			return (
				<div className="well" id={"savedWell"+ i} key={i}>
					<h3 className="articleHeadline">
						<strong>{result.title}</strong>
					</h3>
					<button type="button" className="btn btn-default btn-sm pull-right" data-index={i} onClick={this.handleRemove.bind(this,result.title)}><i className="fa fa-database"></i>Remove</button>
					<h5>
						{result.date}
					</h5>
					<a href={result.url}>
						{result.url}
					</a>

				</div>
			)
		}, this)

		return(
			<div className="row">

				<div className="col-sm-12">
				<br/>

					<div className="panel panel-primary">

						<div className="panel-heading">
							<h3 className="panel-title"><strong><i className="fa fa-table"></i>   Saved Articles</strong></h3>
						</div>

						<div className="panel-body" id="savedSection">
							{savedArtsListing}
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Saved;