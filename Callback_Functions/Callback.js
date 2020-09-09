//if function accepts a function as an argument or returns another function as a result then it is a Higher Order function.
//Callback Function: A function that is passed to another function as an argument and executed inside the function
//
//ALL IN ALL THE FUNCTION THAT ACCEPTS THE FUNCTION AS AN ARGUMENT IS THE HIGHER ORDER FUNCTION
//THE FUNCTION THAT GETS PASSED INTO ANOTHER FUNCTION AS AN ARGUMENT IS THE CALLBACK FUNCTION


/*
function greetMorning(name){
	const myName = "Omar";
	console.log(`Good Morning ${name}, my name is ${myName}`);
}

function greetAfternoon(favLang){
	const hisName = "Pintos_TSift_C_LOWLEVel";
	console.log(`Good Afternon ${hisName} you have been recommended to be a C-Developer... or any other LOW LEVEL LAnguage all day everyday like ${favLang}`);
}
*/
//This will be my callback function
function morning(name){
	return `You will write C-Code All Day ${name.toUpperCase()}`;
}


function afternoon(name){
	return `You will write Assembly All Day ${name.repeat(4)}`;
}


//I am going to combine the above two function into one to what's called a Callback function which will be a universal function
//the parameter name convention for the 2nd argument doesn't matter
function greet(name,cb_func)
{
	//I invoke the callback function I passed in
	const nelanName = 'C-Lover';
	console.log(`${cb_func(name)}, hi there you ${nelanName}`);
}


greet("Nelan_THE_C_Lover",morning);
greet("6342_56837", afternoon);
greet("Nelan is a CS-429 FanBoy/56837", morning);
greet("\nNelan is a LLFB where FB stands for Fan Boy!!!!!", afternoon);
console.log("63526 is T-79438 FB and Cardi-2 FB All The Way hahahahah");
