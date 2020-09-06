console.log("Async Program");

//setTimeout function which takes a callback and there is a delay of 3 seconds.
setTimeout(() => {
	console.log("Within the timeout function");
}, 3000);

//The reason why the THE END prints before the setTimeout is because the function gets popped off
//the call stack and runs in the browser with time taken into consideration after it executes line 12 immediately
//and logs the string of text which was in our function after 3 seconds.


//Callback ex2
const my_elems = [2,5,2,6,5,6,8,3,7];

my_elems.forEach(elem =>{
	console.log(elem);
});

console.log("THE END");
