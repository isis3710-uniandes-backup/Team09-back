const express = require('express');
const app = express();

module.exports={
	getCanvas: function(req, res){
		console.log("The canvas");
	},
	getCanva: function(req, res){
		console.log(req.params.id);
	},
	postCanvas: function(req, res){
		console.log("Post canvas");
	},
	putCanvas: function(req, res){
		console.log("Put canvas "+req.params.id);
	},
	deleteCanvas: function(req, res){
		console.log("Delete canvas "+ req.params.id);
	}
}