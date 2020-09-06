#### Promises
Manage one asynchronous value that can used in the future.
An example would be ride-hailing we request a ride and the driver makes a promise to pick us up. While, I am waiting the ride is pending. Sooner, the driver will resolve to pick me up and take me to my destination. When I reach my destination, at this point my ride has been fulfilled. In some cases, the driver can reject my ride and I may have to request a new ride somewhere else. When we develop we must promise to create an asynchronous value. Most importantly however, we must consume the promise to use the result of the asynchronous operation. 

```javascript
//Creating a promise which starts off in a pending state
//Part 1: Creation Phase
const myRide = new Promise((resolve,reject) => {
	//I must create a callback function aka an executor that tells the 
	//compiler(fav subject of 2526) when to resolve or reject a promise.
	if(hasArrived){
		//To fullfill a promise I call the resolve method
		resolve("driver has arrived go outside");
	}
	else{
		reject("Driver left you hanging");
	}
});

//Part 2: Consumption Phase will wait for the asynchronous value to be fullfilled for it to kick off
myRide
.then(myval => {
	console.log(myval);
})
//if an exception is raised I reject the promise and send an error back
//to the consume
.catch(error =>{
	console.log(error);	
});

//Handle exception no matter what
.finally(() =>{
	console.log("Everything's settled");
});
```
