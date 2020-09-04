let m = document.getElementById('m');
let d = document.getElementById('d');
let p = document.getElementById('p');
let s = document.getElementById('s');

let log = console.log;

let highlight = (ev) => {
	//Stop Propogation from bubbling up the chain
	ev.stopPropogation();
	let target = ev.currentTarget;
	target.className= 'gold';
	reset(target);
}


let reset = (_elem) => {
	setTimeout(() =>{
		_elem.classNAme = '';
	}, 2000);
	/*After 2 sec the reset function will be called automatically*/
}

d.addEventListener('click', (ev) => {
	//Stop the click event from being passed beyond this
	ev.stopImmediatePropagation();
	log('Hello This is a div');
});

[m,d,p,s].forEach((elem) => {
	elem.addEventListener('click', highlight);
})
