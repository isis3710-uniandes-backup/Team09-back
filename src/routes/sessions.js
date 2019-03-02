const express = require('express');
const app = express();

module.exports={
	getSessions: function(req, res){
		console.log("The sessions");
	},
	postSession: function(req, res){
		console.log("Post session");
	},
	putSession: function(req, res){
		console.log("Put Session "+req.params.userid);
	},
	deleteSession: function(req, res){
		console.log("Delete session "+ req.params.sessionid);
	}
}