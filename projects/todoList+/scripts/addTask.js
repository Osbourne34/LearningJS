import {Task} from "./task.js";
import {RenderTasks} from "./renderTasks.js";

export class AddTask {

    constructor(form, date, title, important) {
        this.form = document.getElementById(form);
        this.date = document.getElementById(date);
        this.title = document.getElementById(title);
        this.important = document.getElementById(important);

        this.currentUser = JSON.parse(localStorage.getItem('user'));
    }

    addTask = (event) => {
        event.preventDefault();
        if (this.date.value !== '' && this.title.value !== '') {
            let users = JSON.parse(localStorage.getItem('users'));
            const task = new Task(this.date.value, this.title.value, this.important.checked ? 'important' : 'process');

            users.map(item => {
                if (item.login === this.currentUser) {
                    item.tasks.push(task);
                }
            });

            const renderTasks = new RenderTasks(
                '.todolist__list',
                'process-container',
                'important-container',
                'done-container',
            );

            users.forEach(item => {
                if (item.login === this.currentUser) {
                    renderTasks.renderTasks(item.tasks);
                    renderTasks.renderTasksForCategories(item.tasks);
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
        this.form.addEventListener('submit', this.addTask);
    }
}
