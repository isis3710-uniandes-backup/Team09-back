const express = require('express');
const app = express();

module.exports={
	getComments: function(req, res){
		console.log("The comments");
	},
	getComment: function(req, res){
		console.log(req.params.commentid);
	},
	postComment: function(req, res){
		console.log("Post comment");
	},
	putComment: function(req, res){
		console.log("Put Comment "+req.params.commentid);
	},
	deleteComment: function(req, res){
		console.log("Delete comment "+ req.params.commentid);
	}
}