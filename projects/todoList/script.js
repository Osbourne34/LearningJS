const todos = [];

const input = document.getElementById('input');
const addBtn = document.getElementById('add-btn');
const todoList = document.querySelector('.todo-list');
const deteleBtn = document.querySelector('.delete-btn');
let countId = 1;

function deleteTodo(e) {
    let textTodo = e.parentElement.children[0].value;

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].textTodo === textTodo) {
            todos.splice(i, 1);
        }
    }

    let html = todos.map(item => {
        return `
            <li class="todo-item">
                <input disabled class="todo-text" value="${item.textTodo}">
                <button>Edit</button>
                <button onclick="return deleteTodo(this)" class="delete-btn">x</button>
            </li>  
        `
    }).join('');

    todoList.innerHTML = html;
}

function editDoto(e) {
    e.previousElementSibling.disabled = false
    e.previousElementSibling.focus();

    let currentTodo = e.previousElementSibling.value;
    let todo;
    let currentNum = 0;

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].textTodo === currentTodo) {
            todo = todos[i];
            currentNum = i;
        }
    }

    e.previousElementSibling.onblur = function () {
        e.previousElementSibling.disabled = true

        todo = e.previousElementSibling.value;
        todos[currentNum].textTodo = todo;

    }

}

const btns = () => {

    for (let todo of todos) {
        if (todo.textTodo === input.value) {

            input.value = '';
            return;
        }
    }

    todos.push({ textTodo: input.value, id: countId });
    countId++;

    input.value = '';

    let html = todos.map(item => {
        return `
            <li class="todo-item" >
            <input disabled class="todo-text" value="${item.textTodo}">
                <button onclick="return editDoto(this)">Edit</button>
                <button onclick="return deleteTodo(this)" class="delete-btn">x</button>
            </li>  
        `
    }).join('');

    todoList.innerHTML = html;

};

addBtn.addEventListener('click', btns);




















/* 

*/