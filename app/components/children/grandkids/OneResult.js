var React = require('react');

// This is the form component. 
var OneResult = React.createClass({
	render: function(){

		
	return(
		<div className="well" id={"articleWell"+ this.prop.key} key={this.prop.key}>
			<h3 className="articleHeadline">
				<span className="label label-primary">{this.prop.key}</span>
				<strong>{this.prop.data.title}</strong>
			</h3>
			<h5>
				{this.prop.data.date}
			</h5>
			<h5>
				{this.prop.data.url}
			</h5>
		</div>

	)}
});

// Export the component back for use in other files
module.exports = OneResult;