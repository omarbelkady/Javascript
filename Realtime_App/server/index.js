//This will create a server to get it to run

//I require all the dependencies and since this is running express as my backend I must require it
const express = require('express');
const socketio = require('socket.io');
//We must also require a build in module: http
const http = require('http');


const {addUser, removeUser, getUser, getUsersInRoom} = require('./users.js');

//Bringing the router thanks to require
const router = require('./router');

//Remember to do sth in real time use web sockets over http reqs because http reqs are slow
//Setup the socket.io

//Specifying the port to run the process on or run on port 5000
const PORT = process.env.PORT || 5000;


/*How to run our app
const app = express();
app.listen;
*/

const app = express();
const server = http.createServer(app);
//Creating a constant that will be an instance of the socket.io class
const io = socketio(server);

//How to connect display a status message + a callback function
//A socket will be connected as a client side socket
io.on('connection',(socket) => {
	//console.log("New Connection 968 6342 56837!");

	socket.on('join', ({name, room}, callback) =>{
		const {error, user} = addUser({id: socket.id, name, room});

		if(error) return callback(error);

		//display a message when user joins a 6342_56837 room we are emitting an event from FE to BE
		socket.emit('message', {user: 'admin', text: `${user.name}, welcome!!!! 2526 56837 86 Learn C and Compilers ${user.room}`});

		//Sends a message to everyone except the sender
		socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name}, has entered to learn C!`});

		socket.join(user.room);

		//The callback in FE gets called everytime but if there are no errors the if statement in FE will not run because no errors
		callback();
	});

	//Expecting event on BE
	socket.on('SendMessage',(message, callback) => {
		//get user who sent the message
		const user = getUser(socket.id);

		//specify room name and emit the event and we will send a payload
		io.to(user.room).emit('message', {user: user.name, text: message});

		//Call the callback to do sth in the FE
		callback();
	});

	//implementing the disconnect function
	socket.on('disconnect',()=>{
		console.log("User Left Wipe Your Tears!");
	})
});

//Call it as a middleware
app.use(router);


//Make our server running
//server.listen we will pass in PORT as the first arg and a callback func which will print 
//server has started...
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
