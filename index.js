
function updateBody() {
  var title = document.createElement("h1");
  title.innerHTML = "title: " + document.getElementById("inputToDo").value;
  document.body.appendChild(title);

  var description = document.createElement("p");
  description.innerHTML = "description: " + document.getElementById("inputToDoDescription").value;
  document.body.appendChild(description);
}

function clearInput() {
  document.getElementById("inputToDo").value = ""
  document.getElementById("inputToDoDescription").value = ""
} 

function submitFormList(event) {
 event.preventDefault()
 
 if (document.getElementById("inputToDo").value === "" || document.getElementById("inputToDoDescription").value === "") {
  return null
 }

 updateBody()
 clearInput()
 
}
document.getElementById("formToDo").addEventListener("submit", submitFormList)