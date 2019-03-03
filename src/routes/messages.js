const express = require('express');
const app = express();
const db = require(__dirname.slice(0,__dirname.length-11)+'/models/');

module.exports={
	getMessages: function(req, res){
		console.log("The messages");
	},
	getMessage: function(req, res){
		console.log(req.params.messageid);
	},
	postMessage: function(req, res){
		console.log("Post message");
	},
	putMessage: function(req, res){
		console.log("Put message "+req.params.messageid);
	},
	deleteMessage: function(req, res){
		console.log("Delete message "+ req.params.messageid);
	}
}