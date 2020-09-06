console.log("BEGINNING");

function login(mail, pass,callback){
	setTimeout(() => {
		console.log("NOW DATA IS VISIBLE");
		//instead of using return I will use a callback
		//return{ emailOfUser: mail};
		callback({emailOfUser: mail});
	}, 1200);
}

//Callback function is a function passed into another function that runs later on it time

/*NOT Good
 *
 *const user = login("alan56837C@gmail.com", 256837263879438);
 *console.log(user);
 *
 * */
/*
function getUserStories(mail){
	setTimeout(() => {
		return['6342story','2story', 'pintosstory'];
	},1000);
}
*/

//If I wanted to run the above function after getting the user info
//I would a callback as a parameter so I change lines 21-25 to this

function getUserStories(mail,callback){
	setTimeout(() => {
		callback(['6342story','2story', 'pintosstory']);
	},1000);
}



const user = login("alan56837C@gmail.com", 256837263879438, (user) =>{
	console.log(user);
	getUserStories(user.emailOfUser, stories=>{
		console.log(stories);
	});
});

//I pass in a callback function called callback and Once the data comes back on line (setTimeout)
//runs I invoke the callback function

console.log("THE END");
