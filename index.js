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
app.get("/users/", users.getUsers);
app.get("/users/:userid", users.getUser);
app.post("/users/create", users.postUser);
app.put("/users/edit/:userid",users.putUser);
app.delete("/users/delete/:userid",users.deleteUser);

app.get("/groups/",groups.getGroups);
app.get("/groups/:groupid",groups.getGroup);
app.post("/groups/create", groups.postGroup);
app.post("/groups/:groupid/admins/:id", groups.postAdmin);
app.post("/groups/:groupid/users/:id", groups.postUser);
app.delete("/groups/delete/:groupid",groups.deleteGroup);

app.get("/rooms/", rooms.getRooms);
app.get("/rooms/:roomid", rooms.getRoom);
app.post("/rooms/create", rooms.postRoom);
app.put("/rooms/edit/:roomid", rooms.putRoom);
app.delete("/rooms/delete/:roomid",rooms.deleteRoom);

app.get("/canvas/", canvas.getCanvas);
app.get("/canvas/:id", canvas.getCanva);
app.post("/canvas/create", canvas.postCanvas);
app.put("/canvas/edit/:id",canvas.putCanvas);
app.delete("/canvas/delete/:id",canvas.deleteCanvas);

app.get("/chats/", chats.getChats);
app.get("/chats/:chatid", chats.getChat);
app.post("/chats/create", chats.postChat);
app.delete("/chats/delete/:chatid", chats.deleteChat);

app.get("/messages/", messages.getMessages);
app.get("/messages/:messageid", messages.getMessage);
app.post("/messages/send", messages.postMessage);
app.put("/messages/edit/:messageid",messages.putMessage);
app.delete("/messages/delete/:messageid",messages.deleteMessage);

app.get("/sessions/", sessions.getSessions);
app.post("/sessions/create", sessions.postSession);
app.put("/sessions/:userid", sessions.putSession);
app.delete("/sessions/delete/:sessionid", sessions.deleteSession);

app.get("/comments/", comments.getComments);
app.get("/comments/:commentid", comments.getComment);
app.post("/comments/create", comments.postComment);
app.put("/comments/edit/:commentid", comments.putComment);
app.delete("/comments/delete/:commentid",comments.deleteComment);

app.get("/actions/", actions.getActions);
app.get("/actions/:svgPath", actions.getAction);
app.post("/actions/create", actions.postAction);
app.delete("/actions/delete/:actionid", actions.deleteAction);

app.listen(port,() => {
	console.log('Serverapp listening on port 3000 !');
});
