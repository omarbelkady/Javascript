/*Selecting the button thanks to document.querySelectorAll method*/
/*returns an node list which is an array-like object
 * but I must tranform it into an array
 * then I must look through the buttons and attach both of them to an onclick event hander
 * to transform a nodelist into an array we must use es6 Array.from method
 * To look through and attach to them an onclick event handler I use a forEach to execute the function on each array item separately
 * I will use an Arrow Function and takes an argument which is the current item within the array and this item must attach to the onclick
 * event handler*/
Array.from(document.querySelectorAll(".navigation-button")).forEach((item)=>{
	item.onclick =() =>{
		//item refers to the nav button and I must move one level up
		//I can do this with parentElement and I move another one level up
		//to reach the 6342 card
		//I use the property classList which stores all the classes 
		//I use the toggle JS built in method so that it adds the class name to the element if it doesn't
		//exist and remove the class name from the element if it exists
		item.parentElement.parentElement.classList.toggle("change");
	};
});

