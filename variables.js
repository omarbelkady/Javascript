var myNumber = 3;
var myString = "Hello World";
var myBoolean = true;
var myArray = [];                    // an array
var myObject = {};                  // an object
//console.log 			//how to print
//push				inserts item in an array
//pop				removes item in an array
//unshift 				inserts item at the beginning of an array and prints new array
var myArray = [1,2,3];
myArray.unshift(0);			
console.log(myArray);		//print 0,1,2,3
var myArray = [0,1,2,3,4,5,6,7,8,9];
var splice = myArray.splice(3,5); //start at 4th element and have 5 numbers in total
console.log(splice);        // will print out 3,4,5,6,7
//splice command starts at the object then moves to how many places after that
console.log(myArray);       // will print out 0,1,2,8,9
