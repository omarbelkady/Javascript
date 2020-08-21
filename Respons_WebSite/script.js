/*Creating the container variable*/
const container = document.querySelector('.container')

/*selecting the element*/
document.querySelector('.open-navbar-icon').addEventListener('click',() => {
	container.classList.add('change');
});

/*When I click it I want to remove it from the container*/
document.querySelector('.close-navbar-icon').addEventListener('click',() => {
	container.classList.remove('change');
});


/*Creating an array of colors*/
const colors = ['#6495ed','#7fffd4','#ffa07a','#f08080', '#afeeee'];

let i = 0

/*query through the array of colors and I have to first transform node listi into an array*/
Array.from(document.querySelectorAll('.nav-link')).forEach((item) => {
	item.style.cssText =`background-color:${colors[i++]
	}`; 
});


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
