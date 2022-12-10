var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
var getTime = document.getElementById("time");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

//function time(){ 
//	document.getElementById("time").onclick = function() {document.getElementById("time").value;}; 
//}  add function for datetime selector to add into the li. 


function createListElement() {
	var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value)); //makes text from input field to the li text
	var getTime = document.getElementById("calendarTime").value;
	//li.appendChild(document.createTextNode(getTime.value)); get the selenceted value in the datetimeselector into the li. 
	ul.appendChild(li); //adds li to ul
	input.value = ""; //Reset text input field



	// because it's in the function, it only adds it for new items
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);



	// START ADD DELETE BUTTON
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON


	//ADD CLASS DELETE 
	function deleteListItem(){
		li.classList.add("delete")
	}
	//END ADD CLASS DELETE
}


function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

