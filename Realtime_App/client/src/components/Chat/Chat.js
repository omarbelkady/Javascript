import React,{useState, useEffect} from 'react';

//Module used to retrieve data from URL
import queryString from 'query-string';
import io from 'socket.io-client';


import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;


//Creating the Chat component and rendering it
const Chat = ({location}) => {
	const [name,setName] = useState('');
	
	const [room,setRoom] = useState('');

	const [users, setUsers] = useState('');

	//Creating a state for  message	
	const [message,setMessage] = useState('');

	const [messages,setMessages] = useState([]);


	const ENDPOINT = 'localhost:5000';


	useEffect(() => {
		const {name, room} = queryString.parse(location.search);

		socket= io(ENDPOINT);

		setName(name);

		setRoom(room);

		socket.emit('join', {name, room}, () => {
		
		});

		return () => {
			socket.emit('disconnect');

			socket.off();

		}

		}, [ENDPOINT, location.search]);

	useEffect(() => {
		socket.on('message', (message) => {
			setMessages([...messages, message]);
		})
	}, [messages]);

	//function Sending messages
	const sendMessage = (event) =>{
		event.preventDefault();

		if(message){
			socket.emit('sendMessage', message, () => setMessage(''));
		}
	}

	console.log(message,messages);


	return(
		<div className="outerContainer">
			<div className= "container">
				<InfoBar room= {room}/>
				<Messages messages= {messages} name={name}/>
				<Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>	
					{/*<input 
					value={message}
					onChange={(event) => setMessage(event.target.value)}
					onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
		/> */}
			</div>
		</div>
	);
}
export default Chat;
