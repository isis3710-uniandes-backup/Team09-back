const express = require('express');
const app = express();
const port = 3000;

//Constants for the objects that manage petitions for each resource.
const users = require("./src/routes/users");
const groups = require("./src/routes/groups");
const rooms = require("./src/routes/rooms");
const canvas = require("./src/routes/canvas");
const chats = require("./src/routes/chats");
const messages = require("./src/routes/messages");
const sessions = require("./src/routes/sessions");
const comments = require("./src/routes/comments");
const actions = require("./src/routes/actions");

//Declatarions that link the resources to the main app express manager.
app.use("/users", users.getUsers);
app.get("/groups",groups.getGroups);
app.get("/rooms", rooms.getRooms);
app.get("/canvas", canvas.getCanvas);
app.get("/chats", chats.getChats);
app.get("/messages", messages.getMessages);
app.get("/sessions", sessions.getSessions);
app.get("/comments", comments.getComments);
app.get("/actions", actions.getActions);

app.listen(port,() => {
	console.log('Serverapp listening on port 3000 !');
});
