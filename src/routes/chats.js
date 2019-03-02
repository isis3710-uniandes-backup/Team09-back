const express = require('express');
const app = express();

module.exports={
	getChats: function(req, res){
		console.log("The chats");
	},
	getChat: function(req, res){
		console.log(req.params.chatid);
	},
	postChat: function(req, res){
		console.log("Post chat");
	},
	deleteChat: function(req, res){
		console.log("Delete chat "+ req.params.chatid);
	}
}