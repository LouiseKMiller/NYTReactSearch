// Include the main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Grab the proeprty associated with the Router
var Router = require('react-router').Router;
var hashHistory = require('react-router').hashHistory;
// Grabs the Routes
var routes = require('./config/routes');

// This code here allows us to render our main component (in this case "Main")
ReactDOM.render(

	<Router history={hashHistory}>{routes}</Router>,
	document.getElementById('app')
)