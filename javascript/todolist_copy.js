let todoList = [];


function addTodo() {
    const todoInput = document.querySelector("input");
    const todo = {
        id: 0,
        content: todoInput.value,
        date: ""
    }
    todoList = [ ...todoList, todo ];
    saveLocalStorage();
}

function saveLocalStorage() {
    localStorage.setItem("todolist", JSON.stringify(todoList));
}