const express = require('express');
const app = express();

module.exports={
	getMessages: function(req, res){
		console.log("The messages");
	}
}