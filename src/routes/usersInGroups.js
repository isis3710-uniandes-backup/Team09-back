const db = require(__dirname.slice(0,__dirname.length-11)+'/models/');

module.exports={
	postAdmin: function(req, res){
		return db.UsersInGroups.create({ "groupId":req.params.groupId, "userId":req.params.id, "isAdmin": true })
    		.then((user) => res.send(user))
    		.catch((err) => {
      	console.log('***There was an error giving admin priviledges to user', JSON.stringify(contact))
      return res.status(400).send(err)
    });
	},
	postUser: function(req, res){
		return db.UsersInGroups.create({ "groupId":req.params.groupId, "userId":req.params.id, "isAdmin": false })
    		.then((user) => res.send(user))
    		.catch((err) => {
      	console.log('***There was an error adding user to group', JSON.stringify(contact))
	  return res.status(400).send(err)
	});
	}
}