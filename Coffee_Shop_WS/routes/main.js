const express= require('express');
const router = express.Router();

//Creating a get request for the home page
router.get('/', (req,res,next)=>{
	
	//res.send('Welcome To My CoffeeShop');
	//Instead of rendering Welcome To My CoffeeShop I want to Render my home.html template
	res.render('home');//I put the name of the template not the path of it
});

//This gives us the ability to use this file within other parts of our application
module.exports = router;
