import { Task } from "./task.js";

export class AddTask {

    constructor(form, date, title, important, todoList) {
        this.form = document.getElementById(form);
        this.date = document.getElementById(date);
        this.title = document.getElementById(title);
        this.important = document.getElementById(important);
        this.todoList = document.querySelector(todoList);
        this.currentUser = JSON.parse(localStorage.getItem('user'));
    }

    renderTasks(arr) {

        const html = arr.map((item, index) => {
            return `
                <li class="todolist__item">
                    <div class="todolist__left">
                        <div class="todolist__status todolist__status_important"></div>
                        <p class="todolist__text">${item.task}</p>
                    </div>
                    <div class="todolist__right">
                        <div class="todolist__date">${item.date}</div>
                        <button data-id="${index}" class="todolist__delete button button_large button_border">Delete</button>
                        <button class="todolist__edit button button_large button_fill">Edit</button>
                    </div>
                </li> 
            `
        }).join('');

        this.todoList.innerHTML = html;
    }

    addTask = (event) => {
        event.preventDefault();
        if (this.date.value !== '' && this.title.value !== '') {
            let users = JSON.parse(localStorage.getItem('users'));
            const task = new Task(this.date.value, this.title.value, this.important.checked, false);

            users.map(item => {
                if (item.login === this.currentUser) {
                    item.tasks.push(task);
                }
            });

            users.forEach(item => {
                if (item.login === this.currentUser) {
                    this.renderTasks(item.tasks);
                }
            });
            this.date.classList.remove('input_error');
            this.title.classList.remove('input_error');

            this.date.value = '';
            this.title.value = '';

            localStorage.setItem('users', JSON.stringify(users));
        } else {
            this.date.classList.add('input_error');
            this.title.classList.add('input_error');
        }

    }

    init() {
        JSON.parse(localStorage.getItem('users')).forEach(item => {
            if (item.login === this.currentUser) {
                this.renderTasks(item.tasks);
            }
        });
        this.form.addEventListener('submit', this.addTask);
    }
}
