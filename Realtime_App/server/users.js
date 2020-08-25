const users = [];

const addUser = ({id, name, room}) => {
	//if user enter 2526 56837 6342 it should be 2526568376342
	//if user enters 2526 LOVES pintos it should be 2526lovespintos
	name = name.trim().toLowerCase();
	room = room.trim().toLowerCase();

	//Check if there is an existing user
	const existingUser = users.find((user) => user.room === room  && user.name === name);

	if(existingUser){
		return { error: 'Username already taken'};
	}

	const user = {id, name, room};

	users.push(user);

	return {user};
}

const removeUser = (id) =>{
	const index = users.findIndex((user) => user.id === id);

	if(index !== -1){
		return users.splice(index, 1)[0];
	}
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom};
