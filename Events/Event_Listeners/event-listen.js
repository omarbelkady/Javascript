//Syntax to handling events in JS
//object.addEventListener(event, function)
//object is a sort of variable in actual fact
//div, input tag, img, ajax call, link, button


//When the event DOMContentLoaded(event we are listening to) fires I want to run the function init. Remember
//the browser will fire the event only AFTER it has finished reading the html
document.addEventListener('DOMContentLoaded', init);

function init(){
	//mapping the button in html to js
	let btn = document.getElementById('btn');
	let lnk = document.getElementById('lnk');
	let txt = document.getElementById('txt');

	//Listening for the input event anytime I change the value within the textbox an event is raised
	txt.addEventListener('input', ev =>{
	//target is the input element and target.value is the value property what we inputted
		console.log(ev.type, ev.target, ev.target.value);
	});

	//When I click the text field and modify the text veery similar to blur except there has to be change
	txt.addEventListener('change', ev=>{
		console.log(ev.type, ev.target, target.value);
	});

	//When I click text field and click away the blur function will be called
	txt.addEventListener('blur', ev=>{
		console.log(ev.type)
	});

	//Instead of linkClicked function I will defined it in its position thanks to anonymous functions
	lnk.addEventListener('click', ev=>{
		ev.preventDefault();
		console.log(ev.type, ev.target)
	});


	//Telling js to listen to when we click on the btn to call the function
	btn.addEventListener('click',buttonClicked);
}

//I do not want the init function to run until the html has ran this is
//the reason we have events
function buttonClicked(ev){
	console.log(ev.type,ev.target, ev.currentTarget);
}


/* 
 function linkClicked(ev){
	Click an anchor tag you will be redirected to the page
	ev.PreventDefault();
	Prevent Default stops the default behavior from happening
	console.log(ev.type, ev.target, ev.currentTarget);
}
*/



//Example whereby I am waiting for the user to click
/*myDiv.addEventListener('click', doSomething)*/

/*function doSomething(ev){
	console.log(ev.type)//click event
	console.log(ev.target)//Tells us what caused the event to be raised
	//In this case it would print click
}
*/
