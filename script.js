/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */

let toDoItems = [];
let completedItems = [];
let counter = 0;
let toDoForm = document.getElementById("todo-form");
let toDoList = document.getElementById("todo-inputted-items-list");
let toDoInput = document.getElementById("todo-input");

addToDoItem("");
deleteToDoItem(0);

toDoForm.addEventListener("submit", handleSubmitForm)


const appID = "app";

let appContainer = document.getElementById(appID);


function handleSubmitForm(event) {
  event.preventDefault();
  addToDoItem(toDoInput.value);
  toDoForm.reset();
  renderData();
}

function renderData() {
  console.log("Render Data", toDoItems);
  toDoList.innerHTML = "";

  for (let index = 0; index < toDoItems.length; index++) {
    let listItemContainer = document.createElement("div");

    listItemContainer.classList.add("list-item-container");

    let completeButton = document.createElement("button");
    completeButton.textContent = "✓";
    completeButton.dataset.super = index.toString();

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.dataset.super = index.toString();


    let listItem = document.createElement("li");
    listItem.textContent = toDoItems[index].text;



    listItemContainer.classList.add("list-item-container")
    completeButton.classList.add("complete-button");
    deleteButton.classList.add("delete-button")
    listItem.classList.add("custom-list-item")


    completeButton.addEventListener("click", function (event) {
      console.log("You clicked me");
      console.log("You clicked on", event.target.dataset.super);
      let indexToDelete = parseInt(event.target.dataset.super, 10);

      completedItems.push(toDoItems[indexToDelete]);

      toDoItems.splice(indexToDelete, 1);
      renderData();

      renderCompletedItems();
    });

    listItemContainer.appendChild(completeButton);
    listItemContainer.appendChild(deleteButton);
    listItemContainer.appendChild(listItem);


    toDoList.appendChild(listItemContainer);

    deleteButton.addEventListener("click", function (event) {
      console.log("You clicked me");
      console.log("You clicked on", event.target.dataset.super);
      let indexToDelete = parseInt(event.target.dataset.super, 10);



      toDoItems.splice(indexToDelete, 1);
      renderData();

      renderCompletedItems();
    });

    listItemContainer.appendChild(completeButton);
    listItemContainer.appendChild(deleteButton);
    listItemContainer.appendChild(listItem);


    toDoList.appendChild(listItemContainer);

  }
}


function addToDoItem(text) {
  if (text !== "") {
    let todoItem = {
      id: counter,
      text: text,
      completed: false,
    }
    toDoItems.push(todoItem);
    counter++;
  }
}


function deleteToDoItem(todoId) {

  for (let index = 0; index < toDoItems.length; index++) {
    if (toDoItems[index].id === todoId) {
      console.log("Found me you cucks!")
      toDoItems.splice(index, 1);
      break;
    }
  }
}

deleteToDoItem(1);
console.log(toDoItems);


function markToDoItemAsCompleted(todoId) {
  for (let index = 0; index < toDoItems.length; index++) {
    if (toDoItems[index].id === todoId) {
      toDoItems[index].completed = true;
      completedItems.push(toDoItems[index]);
      toDoItems.splice(index, 1);
      renderCompletedItems();
      break;
    }
  }
}
markToDoItemAsCompleted(1);
console.log(toDoItems);

function renderCompletedItems() {
  let completedItemsList = document.getElementById("completed-list");
  completedItemsList.innerHTML = "";

  for (let index = 0; index < completedItems.length; index++) {
    let listItemContainer = document.createElement('div');
    listItemContainer.classList.add('list-item-container');

    let listItem = document.createElement('li');
    listItem.textContent = completedItems[index].text;
    listItem.classList.add('custom-list-item');

    listItemContainer.appendChild(listItem);
    completedItemsList.appendChild(listItemContainer);
  }
}


function inititialise() {

  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  console.log("App successfully initialised");
}

inititialise();