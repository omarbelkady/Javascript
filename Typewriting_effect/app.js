const texts = ['websites', 'illustration', 'clover', 'pintos', 'assembly', 'machine language'];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

//Typing Effect
(function type(){
	if(count === texts.length){
		count=0;
	}

	currentText = texts[count];
	letter = currentText.slice(0, ++index);//increment through word a letter at a time
	document.querySelector('.typing').textContent= letter;
	//Go to next word when the number of letters within the word is equal to the string length
	if(letter.length === currentText.length){
		count++;
		index=0;
	}
	//Invoke the function type every 400 milliseconds
	setTimeout(type, 400);
}());

//How to call a function immediately
/*
 *		(function nameOfFunc(){
 *		}())
 *
 *
 *
 * */
