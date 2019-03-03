const express = require('express');
const app = express();
const db = require(__dirname.slice(0,__dirname.length-11)+'/models/');

module.exports={
	getRooms: function(req, res){
		console.log("The rooms");
	},
	getRoom: function(req, res){
		console.log(req.params.roomid);
	},
	postRoom: function(req, res){
		console.log("Post room");
	},
	putRoom: function(req, res){
		console.log("Put room "+req.params.roomid);
	},
	deleteRoom: function(req, res){
		console.log("Delete room "+ req.params.roomid);
	}
}