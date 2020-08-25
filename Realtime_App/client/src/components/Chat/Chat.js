import React,{useState, useEffect} from 'react';

//Module used to retrieve data from URL
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

//Creating the Chat component and rendering it
const Chat = ({location}) => {
	useEffect(() => {
		//retrieve data(url is the data returned) that users had while joining
		const data = queryString.parse(location.search);

		console.log(location.search);
		console.log(data);
	});
	return(
		<h1>Chat With 63526</h1>
	)
}
export default Chat;
