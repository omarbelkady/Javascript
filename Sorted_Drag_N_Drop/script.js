const draggables = document.querySelectorAll(".draggable");

//get the containers to be able to drop in them the different elements
//When doing drag and drop with html and js we must know what draggable elements are and where we can drop the elements
const container = document.querySelectorAll(".container");

//setting the event listeners
draggables.forEach(draggable => {
	draggable.addEventListener("dragstart", () =>{
		draggable.classList.add("dragging");
		//console.log("drag start");
	});
	//even though I start the drag the element remains opaque I do not want I will create an event listener
	draggable.addEventListener("dragend", ()=>{
		draggable.classList.remove("dragging");
	});
});

container.forEach(container => {
	container.addEventListener("dragover", e =>{
		//by replacing the parenthesis with e and calling the e.preventDefault I remove the block symbol and allow to drop
		e.preventDefault();
		const afterElement = getTheDragAfterElement(container, e.clientY);
		console.log(afterElement);
		//console.log("drag over");
		//determine which element we are currently 
		const draggable = document.querySelector(".dragging");
		if(afterElement === null){
			container.appendChild(draggable);
		}

		else{
			container.insertBefore(draggable, afterElement);
		}
	});
});
//get the mouse position 
function getTheDragAfterElement(container, y){
	//determine all the elements within the container we are currently hovering over
	//essentially get every draggable that I am not dragging
	const draggableElements = [...container.querySelectorAll("draggable:not(.dragging)")];
	//1st param: value we are reducing to directly after our mouse cursor
	//2nd param: each one of the drag elements aka child
	return draggableElements.reduce((closest, child)=>{
		//determine position of elements on the screen in relation to the mouse
		const the_box = child.getBoundingClientRect();
		//get the offset: distance between the center of the box and the mouse cursor
		const offset= y - the_box.top - the_box.height/2;
		console.log(offset);
		if(offset < 0 && offset > closest.offset)
		{
			//to make sure we are having our cursor a little bit above the element
			return {offset: offset, element: child};
		}
			else{
				return closest;
			}

		
	},{offset: Number.NEGATIVE_INFINITY}).element;
}
