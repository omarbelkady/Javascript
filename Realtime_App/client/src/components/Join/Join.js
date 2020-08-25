import React,{ useState} from 'react';
import {Link} from "react-router-dom";
import './Join.css';
{/*importing my styles*/}


export default function SignIn() {
	{/*I must always declare hooks within function based
	component and no where else
	first element in index is the nameof the variable and the second is the setter func
	name is a state and setName is a function that is the setter of the state
	I am passing the name Stage an empty string */}
	const [name, setName] = useState('');

	//State #2
	const [room, setRoom] = useState('');


	return (
		<div className="joinOuterContainer">
			<div className="joinInnerContainer">
				<h1 className="heading">Join</h1>
		{/*<!-- OnChange Handler: logic of the component happens. When the user types sth in the textbox
				An Event will be raised -->*/}
			
				return(
				<div>
					<input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)}/>
				</div>
				<div>
					<input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)}/>
				</div>
				
					{/* Link will lead us to chat but we have to pass in parameters thanks to the question mark
				Prevent the user from logging in if the input validatio usrename and pass are wrong since this will break out app}
				
				Raise the event only if the condition is met -->*/}
				<Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
					<button className="button mt-20" type="submit">Sign In 968 6342 56837</button>
					
				</Link>
			</div>
		</div>
	);
}
