//select the first input
const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElem = document.getElementById("error");
//catch error before submitted on page: add an Event listener
form.addEventListener("submit", (e)=>{
	let message = [];
	if(name.value === "" || name.value === null)
	{
		message.push("You must supply a name here");
	}

	if(password.value.length <= 6){
		message.push("Your password must have more than 6 chars");
	}

	
	if(password.value.length >= 20){
		message.push("Your password is too long it must be less than 20 chars!");
	}

	if(password.value === "password"){
		message.push("Choose a different password this is an easy password!");
	}

	if(message.length > 0)
	{
		e.preventDefault();
		errorElem.innerText = message.join(", ");
	}
});
