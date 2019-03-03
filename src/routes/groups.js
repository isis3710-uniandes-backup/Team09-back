const express = require('express');
const app = express();
const db = require(__dirname.slice(0,__dirname.length-11)+'/models/');

module.exports={
	getGroups: function(req, res){
		console.log("The groups");
	},
	getGroup: function(req, res){
		console.log(req.params.groupid);
	},
	postGroup: function(req, res){
		console.log("crea grupo");
	},
	postAdmin: function(req, res){
		console.log("Admin "+req.params.id+" for "+req.params.groupid);
	},
	postUser: function(req, res){
		console.log("User "+req.params.id+" for "+req.params.groupid);
	},
	deleteGroup: function(req, res){
		console.log(req.params.groupid);
	}
}