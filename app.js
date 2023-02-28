const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");

addTodoBtn.addEventListener("click", function() {
  const todoText = todoInput.value;
  if (todoText !== "") {
    const newTodo = document.createElement("li");
    newTodo.className = "todo-item";
    newTodo.innerHTML = `<span>${todoText}</span><button>Delete</button>`;
    todoList.appendChild(newTodo);
    todoInput.value = "";
    newTodo.querySelector("button").addEventListener("click", function() {
      todoList.removeChild(newTodo);
    });
  }
});

todoInput.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    addTodoBtn.click();
  }
});
