{
	let num = [313,13,131,13,42,15];
	num.length =30;
	/*
	for(let i=0;i<num.length;i++{
		if(num[i] !== undefined)
			console.log(num[i]);
	}
	*/
	//When you pass in a function as an argument this is known 
	//as a callback. This means that forEach will call 
	//the function within the loop
	grades.forEach(function(elem){
		console.log("What\''s up!!!"+elem);
	});

	//access indiv item => 1st arg
	//access index => 2nd arg
	//access entire arr => 3rd arg
	grades.forEach(function(item,i,arr){
		console.log(item,i,arr);
	});
}
