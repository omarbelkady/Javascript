//I select the element or group that I want and designate the effect I wish to apply to the portion
//
//
//querySelector('any css') ----- this selects one element
//querySelectorAll('any css') ---- this selects all the elements


const myres = document.querySelector('#myres');
myres.style.backgroundColor='purple';

const elem = document.querySelector('.special');

const lastElem = document.querySelector('li:last-child');

const my_list = document.querySelectorAll('.special');


my_list.forEach(function(elem){
	console.log(elem);
	elem.style.color = 'green';
});
