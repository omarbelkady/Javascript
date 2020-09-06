/*
 *4 states of a promise:
 * fulfilled: Promise succeeded
 * rejected: Promise Failed
 * pending: Still waiting not fullfilled nor rejected
 * settled: Promise has been fulfilled or rejected
 * */

var myPromise = new Promise(function(req, res){
	const c = "C Lover";
	const j = "Java Lover";
	if(c == j){
		resolve();
	}
	else{
		reject();
	}
});

//Consume The Promise
myPromise.
	then(function (){
		console.log("Java Lover You are a Enemy");
	}).
	catch(() => {
		console.log("C Lover You are Successful");
	});
//A then method is called when a promise is either res or rej
//The then method takes two functions as parameters:
//	a. if promised is resolved and there is an ouput
//	b. if promise is rejected and error is received
//	optional. use the .catch method to handle the error

//ex:
/*
 *
 *	.then(function(result){
 *		//handles successful response
 *	}, function(error){
 *		//handles errored responses
 *	})
 *
 *
 * */
