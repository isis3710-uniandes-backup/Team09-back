const express = require('express')
const app = express()
const port = 3000

//Constants for the objects that manage petitions for each resource.
const users = require("src/routes/users");
const groups = require("src/routes/groups");
const rooms = require("src/routes/rooms");
const canvas = require("src/routes/canvas");
const chats = require("src/routes/chats");
const messages = require("src/routes/messages");
const sessions = require("src/routes/sessions");
const comments = require("src/routes/comments");
const actions = require("src/routes/actions");

//Declatarions that link the resources to the main app express manager.
app.use("/users", users);
app.use("/groups",groups);
app.use("/rooms", rooms);
app.use("/canvas", canvas);
app.use("/chats", chats);
app.use("/messages", messages);
app.use("/sessions", sessions);
app.use("/comments", comments);
app.use("/actions", actions);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))