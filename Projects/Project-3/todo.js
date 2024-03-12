// let todoList = [];
// displayItems();
// function addTodo() {
//   //selecting the input-todo by doc...
//   let inputElement = document.querySelector("#input-todo");

//   // assigning the value of text of todoItems
//   let todoItem = inputElement.value;

//   // adding the item to the todolist array
//   todoList.push(todoItem);

//   //making inputElement value is empty
//   inputElement.value = "";

//   //calling the displayItems fn
//   displayItems();
// }

// function displayItems() {
//   // selecting element of todo-items
//   let displayEle = document.querySelector("#todo-conatainer");

//   // making value is empty
//   displayEle.innerText = " ";

//   //ruuning a for loop for that we are storing in the todolist array
//   for (let i = 0; i <= todoList.length; i++) {
//     // displaying the element with \n so it will go next line
//     displayEle.innerText = displayEle.innerText + "\n" + todoList[i];
//   }
// }

let todoList = [
  {
    item: "Buy Milk",
    dueDate: "4/10/2023",
  },
  {
    item: "Go to College",
    dueDate: "4/10/2023",
  },
];

displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = "";
  dateElement.value = "";
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class='btn-delete' onclick="todoList.splice(${i}, 1);
      displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}
