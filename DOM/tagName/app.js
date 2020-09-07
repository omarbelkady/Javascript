//TagName allows me to select the element I want or group of elements and apply a special effect of my choice


const heading = document.getElementsByTagName('h2');
heading[0].style.color= 'blue';

const items = document.getElementsByTagName('li');

items[2].style.color = 'green';
const bet_items= [...items];

bet_items.forEach(function(elem){
	//console.log(elem);
});

console.log(items);
console.log(bet_items);
