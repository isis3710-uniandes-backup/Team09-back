const express = require('express');
const app = express();
const db = require(__dirname.slice(0,__dirname.length-11)+'/models/');

module.exports={
	getUsers: function(req, res){
		console.log("The users");
		return db.Users.findAll()
    		.then((users) => res.send(users))
    		.catch((err) => {
      		console.log('There was an error querying users', JSON.stringify(err))
      	return res.send(err)
    });

	},
	getUser: function(req, res){
		console.log(req.params.userid);
		let id=parseInt(req.params.userid);
		return db.Users.findById(id)
    		.then((user) => res.send(user))
    		.catch((err) => {
      		console.log('There was an error querying the user', JSON.stringify(err))
      	return res.send(err)
    });

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
