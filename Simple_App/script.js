//Creating a constainer that will store all the list items
const listsContainer= document.querySelector('[data-lists]')

//Creating a variable that will hold all the variables
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const deleteListButton = document.querySelector('[data-delete-list-button]')

const listDisplayContainer=document.querySelector('[data-list-display-container]')
const listTitleElement=document.querySelector('[data-list-title]')
const listCountElement=document.querySelector('[data-list-count]')
const tasksContainer=document.querySelector('[data-tasks]')


//Creating a namespace which will prevent us from overwriting what's in local storage
const LOCAL_STORAGE_LIST_KEY='task.lists'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY='task.selectedListId'


let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY) || []

//Save in the user's browser thanks to the local storage


//When we click on a list item be able to trigger actions
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)

//Adding an event Listener
listsContainer.addEventListener('click', e =>{
	//Checking if the clicked element an li aka the tag name 
	//run the code below
	if(e.target.tagName.toLowerCase() === 'li'){
		selectedListId= e.target.dataset.listId	
		savingAndRendering()
	}
})

//Adding an Event Listener
deleteListButton.addEventListener('click',e => {
	//Return me all the lists that we don't have currently selected
	lists = lists.filter(list => list.id !== selectedListId)
	selectedListId=null
	savingAndRendering()
})

//Creating an event lister
newListForm.addEventListener('submit',e =>{
	//Stopping the page from refreshing when we click the submit button
	e.preventDefault()

	//Fetching the name of the element we just typed in our list
	const listName = newListInput.value

	//Checking if user inputted a list element
	if(listName == null || listName === '')	return
	//If they do type in a name create a new list
	const list= createList(listName)
	newListInput.value = value
	lists.push(list)
	savingAndRendering()
	
})

//returns an object
function createList(name){
	return { id: Date.now().toString(), name: name, tasks:[{
		id: 1,
		name: 'sdfasdf',
		complete: false
	}]}

}

function savingAndRendering(){
	save()
	render()
}


//Save items within our TodoList and we must specify the key we are using
function save()
{
	localStorage.setItem(LOCAL_STORAGE_LIST_KEY,JSON.stringify(lists))
	//SAving our list string as well
	localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
}

function render(){
	//Populate list
	clearElement(listsContainer)
	//Calling the renderLists function
	renderLists()

	//Find the id of the selected lists
	const selectedList = lists.find(list => list.id === selectedListId)

	//Checking to see if we have selected List
	if(selectedListId==){
		listDisplayContainer.style.display = 'none'
	}

	else{
		listDisplayContainer.style.display = ''
		listTitleElement.innerText = selectedListId.name
		renderTaskCount(selectedList)
	}
}

function renderTaskCount(selectedList){
	//Get the number of incomplete tasks
	const incompleteTaskCount = selectedList.tasks.filter(task => !task.complete).length
	const taskString = incompleteTaskCount === 1 ? "task" : "tasks"
	listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`
}

function renderLists(){
	
	lists.forEach(list => {
		//Create a list element
		const listElement = document.createElement('li')
		//Take our listElement and add a data attribute to it
		listelement.dataset.listId=list.id
		listElement.classList.add("list-name")
		listElement.innerText =list.name
		//Check to see if list id is the selected list id
		if(list.id === selectedListId){
			listElement.classList.add('active-list')
		}
		//Append to the list container
		listsContainer.appendChild(listElement)
	}
}




function clearElement(element){
	//Checking to see if the element has a first child
	while(element.firstChild){
		element.removeChild(element.firstChild)
	}
}
//Calling the function that will rendor the list of items
render()
