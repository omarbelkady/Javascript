alert("Shut Up! 2526 56837 6342!!!");

//How to reference an id from the html file
document.getElementById("button").onclick=function(){
	document.getElementById("confirm").innerHTML = "Order Confirmed. Check Your Email";
	//Hide button once clicked
	document.getElementById("button").style.display="none";
}
