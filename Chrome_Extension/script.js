alert("2526 Is A C-Lover");
replaceTheText(document.body);
function replaceTheText(element){
	if(element.hasChildNodes()){
		element.childNodes.forEach(replaceTheText);
	}
	else if(element.nodeType === Text.TEXT_NODE){
		if(element.textContent.match(/coronavirus/gi)){
			//element.parentElement.style.color= "blue";
			//element.parentElement.style.backgroundColor= "green";
		//	const newElement = document.createElement('span');
		//	newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi,
		//	'<span style="background-color: green; color: blue;">$1</span>')
		//	element.replaceWith(newElement);
		
		//element.textContent = element.textContent.replace(/coronavirus/gi, 'BernardLover');
			//remove every element there is that makes a match
			element.parentElement.remove();
		}
	}
}
