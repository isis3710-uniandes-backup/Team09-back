const express = require('express');
const app = express();

module.exports={
	getUsers: function(req, res){
		console.log("The users");
	}
}

//app.get('/users', (req, res) => {
  //  res.send(`Hello World!`)
    //console.log("Estas aqui")
//});
