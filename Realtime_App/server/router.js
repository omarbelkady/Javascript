const express = require('express');
const router = express.Router();

//Creating the get request to the root route with a typical request and response
router.get('/', (req,res) =>{
	res.send("Server is up and Running");	
});

module.exports = router;
