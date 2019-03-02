const express = require('express');
const app = express();

module.exports={
	getUsers: function(req, res){
		console.log("The users");
	},
	getUser: function(req, res){
		console.log(req.params.userid);
	},
	postUser: function(req, res){
		console.log("Post user");
	},
	putUser: function(req, res){
		console.log("Put User "+req.params.userid);
	},
	deleteUser: function(req, res){
		console.log("Delete user "+ req.params.userid);
	}
}

//app.get('/users', (req, res) => {
  //  res.send(`Hello World!`)
    //console.log("Estas aqui")
//});
