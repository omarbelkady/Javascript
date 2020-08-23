//Initialize our proj structure
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//2.
//I now must create the two components so my application doesn't break
import Join from './components/Join';
import Chat from './components/Chat';


//1.Creating the App Component
const App = () =>(
	//What we will return aka render
	<Router>
	  	{/*When the user lands on the page he will be greeted with the Join Component inside of the / path he
		 will pass in his data in the login form and in query String*/}
		<Route path ="/" exact component = {Join}/>
		{/*I pass the data through the chat. Once We have the data I render the chat component*/}
		<Route path ="/chat" component = {Chat}/>
	</Router>
);

export default App;



