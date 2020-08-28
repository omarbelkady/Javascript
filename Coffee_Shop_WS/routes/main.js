const express= require('express');
const router = express.Router();

//Creating a get request
router.get('/', (req,res,next)=>{
	res.send('Welcome To My CoffeeShop');
});

//This gives us the ability to use this file within other parts of our application
module.exports = router;
