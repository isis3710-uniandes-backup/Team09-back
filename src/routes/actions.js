const express = require('express');
const app = express();

module.exports={
	getActions: function(req, res){
		console.log("The actions");
	},
	getAction: function(req, res){
		console.log(req.params.svgPath);
	},
	postAction: function(req, res){
		console.log("Post action");
	},
	deleteAction: function(req, res){
		console.log("Delete user "+ req.params.actionid);
	}
}