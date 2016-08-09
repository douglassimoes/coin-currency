var React = require('react');
var Main = require('../components/Main');
var Comment = require('../components/Comment');
var Router = require('react-router');
var Route = Router.Route;

console.log("Chegou aqui");

module.exports = {
	<Route path="/" component={Main}>
	</Route>
	<Route path="/Comment" component={Comment}>
	</Route>
};