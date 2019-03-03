const express = require('express');
const app = express();
const db = require(__dirname.slice(0,__dirname.length-11)+'/models/');

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