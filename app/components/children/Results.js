
// Include React 
var React = require('react');



var Results = React.createClass({

	// When a user submits... 
	handleSave: function(i, props){

		var status = this.props.saves;
		if (status[i] == 0){
		// console.log("status after: ", status);
			this.props.saveArticle(i);
		}
		// Set the parent to have the search term
	//	this.props.setSave(this.state);
		return false;
	},


	// Here we render the function
	render: function(){

		var articles = this.props.nycData;
		var articleList = articles.map(function(result, i){
			return (
				<div className="well" id={"articleWell"+ i} key={i}>
					<h3 className="articleHeadline">
						<strong>{result.title}</strong>
					</h3>
					<button type="button" className="btn btn-default btn-sm pull-right" data-index={i} onClick={this.handleSave.bind(this,i,this.props)}><i className="fa fa-database"></i>Save</button>
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
				<br />

					<div className="panel panel-primary">

						<div className="panel-heading">
							<h3 className="panel-title">
								<strong>Top Articles</strong>
							</h3>
						</div>

						<div className="panel-body">	
							{articleList}				
						</div>

					</div>
				</div>
			</div>
		)
	}
});

module.exports = Results;
