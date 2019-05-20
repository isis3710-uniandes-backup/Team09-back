const express = require('express');
const app = express();
const path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3001;

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

var HandlerGenerator = require("./handlegenerator.js");
var middleware = require("./middleware.js");

HandlerGenerator = new HandlerGenerator();

//const usersInGroups = require("./src/routes/usersInGroups");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../Team09-front/build')));
app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");
	if ('OPTIONS' === req.method) {
		//respond with 200
		res.send(200);
	  }
	  else {
	  //move on
		next();
	  }
});

//app.use(bodyParser.json());
var jsonParser       = bodyParser.json({limit:'50mb', type:'application/*+json'});
var urlencodedParser = bodyParser.urlencoded({ extended:true,type:'application/x-www-form-urlencoding' })
//modified in body-parser/lib/types/json
app.use(jsonParser);
app.use(urlencodedParser);

//var messagesList=[];

//sockets.io declarations
function onConnection(socket){
	
	socket.emit('messages','hola');
	socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
	socket.on('join',function(data){
		socket.join(data);
	});
	socket.on('new-message', function(data) {
		socket.join(data.id);
		socket.to(data.id).emit('messages', data);
		socket.leave();
	});
	//socket.on('messages', (data) => socket.broadcast.emit('message', data));
}
  
io.on('connection', onConnection);

//Declatarions that link the resources to the main app express manager.
//User routes

//app.get('/h', middleware.checkToken, HandlerGenerator.index);
app.post( '/api/login/:username', HandlerGenerator.login);

app.get("/api/users/",middleware.checkToken, users.getUsers);
app.get("/api/users/:userid",middleware.checkToken, users.getUser);
app.get("/api/users/name/:username",middleware.checkToken, users.getUserByName);
app.post("/api/users/create", users.postUser);
app.put("/api/users/edit/:userid", middleware.checkToken,users.putUser);
app.delete("/api/users/delete/:userid", middleware.checkToken,users.deleteUser);

//Group routes
app.get("/api/groups/",middleware.checkToken, groups.getGroups);
app.get("/api/groups/:groupid",middleware.checkToken,groups.getGroup);
app.post("/api/groups/create",middleware.checkToken, groups.postGroup);
app.delete("/api/groups/delete/:groupid",middleware.checkToken,groups.deleteGroup);
app.get("/api/groups/:groupid/users",middleware.checkToken,groups.getUsers);
app.get("/api/groups/:groupid/rooms",middleware.checkToken,groups.getRooms);
app.get("/api/groups/user/:userid",middleware.checkToken,groups.getGroupsFromUser);

//Room routes
app.get("/api/rooms/",middleware.checkToken, rooms.getRooms);
app.get("/api/rooms/:roomid",middleware.checkToken, rooms.getRoom);
app.get("/api/rooms/:roomid/canvas",middleware.checkToken, rooms.getCanvases);
app.get("/api/rooms/:roomid/messages",middleware.checkToken, rooms.getMessages);
app.get("/api/rooms/:roomid/chats",middleware.checkToken, rooms.getChats);
app.post("/api/rooms/create",middleware.checkToken, rooms.postRoom);
app.put("/api/rooms/edit/:roomid",middleware.checkToken, rooms.putRoom);
app.delete("/api/rooms/delete/:roomid",middleware.checkToken, rooms.deleteRoom);

//Canvas routes
app.get("/api/canvas/",middleware.checkToken, canvas.getCanvas);
app.get("/api/canvas/:id",middleware.checkToken, canvas.getCanva);
app.post("/api/canvas/create",middleware.checkToken, canvas.postCanvas);
app.put("/api/canvas/edit/:id",middleware.checkToken,canvas.putCanvas);
app.delete("/api/canvas/delete/:id",middleware.checkToken,canvas.deleteCanvas);

//Chat routes
app.get("/api/chats/",middleware.checkToken, chats.getChats);
app.get("/api/chats/:chatid",middleware.checkToken, chats.getChat);
app.post("/api/chats/create",middleware.checkToken, chats.postChat);
app.delete("/api/chats/delete/:chatid",middleware.checkToken, chats.deleteChat);

//Messages routes
app.get("/api/messages/",middleware.checkToken, messages.getMessages);
app.get("/api/messages/:messageid",middleware.checkToken, messages.getMessage);
app.post("/api/messages/send",middleware.checkToken, messages.postMessage);
app.put("/api/messages/edit/:messageid",middleware.checkToken, messages.putMessage);
app.delete("/api/messages/delete/:messageid",middleware.checkToken, messages.deleteMessage);

//Sessions routes
app.get("/api/sessions/",middleware.checkToken, sessions.getSessions);
app.post("/api/sessions/create",middleware.checkToken, sessions.postSession);
app.put("/api/sessions/:userid",middleware.checkToken, sessions.putSession);
app.delete("/api/sessions/delete/:sessionid",middleware.checkToken, sessions.deleteSession);

//Comments routes
app.get("/api/comments/",middleware.checkToken, comments.getComments);
app.get("/api/comments/:commentid",middleware.checkToken, comments.getComment);
app.post("/api/comments/create",middleware.checkToken, comments.postComment);
app.put("/api/comments/edit/:commentid",middleware.checkToken, comments.putComment);
app.delete("/api/comments/delete/:commentid",middleware.checkToken,comments.deleteComment);

//Actions routes
app.get("/api/actions/",middleware.checkToken, actions.getActions);
app.get("/api/actions/:svgPath",middleware.checkToken, actions.getAction);
app.post("/api/actions/create",middleware.checkToken, actions.postAction);
app.delete("/api/actions/delete/:actionid",middleware.checkToken, actions.deleteAction);
app.put("/api/actions/draw/:canvasId",middleware.checkToken, actions.putAction);


app.post("/api/groups/admins",middleware.checkToken, groups.postAdmin);
app.post("/api/groups/users",middleware.checkToken, groups.postUser);

http.listen(port,() => {
	console.log('Serverapp listening on port 3001 !');
});
