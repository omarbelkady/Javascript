//events in the browser
//types of ev methods: ev.char || ev.charCode || ev.which
//keydown, keyup, keypress
let log = console.log;
document.addEventListener('DOMContentLoaded', init);

function init(){
	let txt= document.getElementById('txt');
	if(txt){
		txt.addEventListener('keydown',anyKey);
	}
	//So both the text field and the body have the same listener waiting for the keydown event
	document.body.addEventListener('keydown', anyKey);
}

function anyKey(ev){
	//log(ev.type, ev.target);
	let target = ev.currentTarget;
	//lets you know which tag you are interracting with
	let tag = target.tagName;
	let char = ev.char || ev.charCode || ev.which;
	//Prints to the console the id of the character inputted
	//log(char,tag);
	let s = String.fromCharCode(char);
	//Print the character code of every character within the string
	//log(s);
	//Keydown listener of left arrow and down arrow
	switch(char){
		case 37: 
			log('LEFT');
			break;
		case 40:
			log('DOWN');
			break;
	}
}
