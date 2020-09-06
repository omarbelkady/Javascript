function otherFunct(){
	console.log("Within another function");
	console.log("BLABLABLA");
}
//closing of call stack

console.log("BEGIN");

otherFunct();

console.log("FINISH");
