function animatedForm(){
	const arrows= document.querySelectorAll('.fa-arrow-down');
	arrows.forEach(arrow => {
		arrow.addEventListener(click, () => {
			const input = arrow.previousElementSibling;
			//to get the parent
			const parent = arrow.parentElement;
			//display the next form which is the email
			const nextForm = parent.nextElementSibling;

			//Input validation
			if(input.type === "text" && validateUser(input))
			{
				console.log("Everying is okay 968 6342 56837");
			}
		});
	});
}

//input validation
function validateUser(user){
	//validating the username chars
	if(user.value.length <6){
		console.log("Not Enough Chars");//Must be > c-56837
		error('rgb(189,87,87)');
	}

	else{
		error('rgb(87,189,130)');
		return true;
	}
}

function error(color){
	document.body.style.backgroundColor = color;
}


animatedForm();
