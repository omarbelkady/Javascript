function animatedForm(){
	const arrows= document.querySelectorAll('.fa-arrow-down');
	arrows.forEach(arrow => {
		arrow.addEventListener("click", () => {
			const input = arrow.previousElementSibling;
			//to get the parent
			const parent = arrow.parentElement;
			//display the next form which is the email
			const nextForm = parent.nextElementSibling;

			//Input validation
			if(input.type === "text" && validateUser(input))
			{
				nextSlide(parent, nextForm);
				//console.log("Everying is okay 968 6342 56837");
			}

			else if(input.type === 'email' && validateEmail(input)){
				nextSlide(parent, nextForm);
			}

			else if(input.type === 'password' && validateUser(input)){
				nextSlide(parent, nextForm);
			}

			else{
				parent.style.animation = "shake 0.5s ease";
			}

			//getting rid of the animation
			parent.addEventListener('animationend', () =>{
				parent.style.animation = "";
			})
		});
	});
}
			//function User Validation
			function validateUser(user){
				if(user.value.length < 6){
					console.log("Not Enough Chars 968 6342 56837");
					error("rgb(189,87,87)");
				} else{
					error("rgb(87, 189, 130)");
					return true;
				}


			}


			//Email Validation
			function validateEmail(email){
				const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if(validation.test(email.value)){
					error("rgb(87,189,130)");
					return true;
				}

				else{
					error("rgb(87,189,130)");
				}
			}


function nextSlide(parent, nextForm)
{
	parent.classList.add('innactive');//transition out
	//remove the active from from it to go on to the next
	parent.classList.remove('active');
	nextForm.classList.add('active');//transition in
}

function error(color){
	document.body.style.backgroundColor = color;
}


animatedForm();
