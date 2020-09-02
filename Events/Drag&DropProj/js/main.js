//Creating vars for the filled and empty boxes

const fill =document.querySelector('.fill');
const the_empties = document.querySelectorAll('.empty');


//Adding the fill listener and we will call dragStart function once the event is raised
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//Loop through the empty boxes and call the dragEvent
for(const emptyElems of the_empties){
	emptyElems.addEventLister('dragover', dragOver);
	emptyElems.addEventLister('dragenter', dragEnter);
	emptyElems.addEventLister('dragleave', dragLeave);
	emptyElems.addEventLister('drop', dragDrop);
}


//Drag Funcs
function dragStart(){
	//When We click on it and hold it 
	console.log('start');
	//fill element that we grab and we append the hold class
	this.className += ' hold';
	//this.className = 'invisible';//When we click it, it disappears
	//Making a callback after we drag and drop
	setTimeout(() => (this.className = 'invisible'),0);
}

function dragEnd(){
	this.className = 'fill';
}

function dragOver(e){
	//We pass in an event listener
	e.preventDefault();
	//This will call the drop method when I release the mouse
	//console.log("over");
}


function dragEnter(){
	e.preventDefault();
	this.className += ' hovered';
	//console.log("enter");
}


function dragLeave(){
	//clear and replace the hovered property 
	this.className = 'empty';
	//console.log("leave");
}

function dragDrop()
{
	this.className = 'empty';
	//Append the empty to the fill div
	this.append(fill);
	//console.log("drop");
}
