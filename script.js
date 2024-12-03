function goToSignIn() {
    document.getElementById("sign-in").classList.add("active");
    document.getElementById("sign-up").classList.remove("active");
  }
  
  function goToSignUp() {
    document.getElementById("sign-up").classList.add("active");
    document.getElementById("sign-in").classList.remove("active");
  }
  
  function goToHome() {
    document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
    document.getElementById("home").classList.add("active");
  }
  
  function goToTodo() {
    document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
    document.getElementById("todo").classList.add("active");
  }
  
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
    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => todoItem.remove();
  
    todoItem.appendChild(todoInputField);
    todoItem.appendChild(editButton);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
  
    todoInput.value = "";
  }
  