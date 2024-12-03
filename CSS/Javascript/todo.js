// Function to add a new todo item
function addTodo() {
    const todoInput = document.getElementById("new-todo-input");
    const todoText = todoInput.value.trim();
  
    if (todoText === "") return;
  
    const todoList = document.getElementById("todo-list");
  
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
  
    const todoInputField = document.createElement("input");
    todoInputField.type = "text";
    todoInputField.value = todoText;
    todoInputField.readOnly = true;
  
    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.innerText = "Edit";
    editButton.onclick = () => {
      if (todoInputField.readOnly) {
        todoInputField.readOnly = false;
        todoInputField.focus();
        editButton.innerText = "Save";
      } else {
        todoInputField.readOnly = true;
        editButton.innerText = "Edit";
      }
    };
  
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => todoItem.remove();
  
    todoItem.appendChild(todoInputField);
    todoItem.appendChild(editButton);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
  
    todoInput.value = "";
  }
  
  // Function to logout
  function logout() {
    window.location.href = "index.html";
  }
  