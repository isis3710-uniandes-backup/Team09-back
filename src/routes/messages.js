const express = require('express');
const app = express();

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