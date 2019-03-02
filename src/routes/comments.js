const express = require('express');
const app = express();

module.exports={
	getComments: function(req, res){
		console.log("The comments");
	}
}