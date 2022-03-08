export class RenderTasks {
    constructor(todoList, processContainer, importantContainer, doneContainer) {
        this.todoList = document.querySelector(todoList);

        this.processContainer = document.getElementById(processContainer);
        this.importantContainer = document.getElementById(importantContainer);
        this.doneContainer = document.getElementById(doneContainer);

        this.users = JSON.parse(localStorage.getItem('users'));
        this.user = JSON.parse(localStorage.getItem('user'));

        document.addEventListener('DOMContentLoaded', () => {
            this.users.find(item => {
                if(item.login === this.user) {
                    this.renderTasksForCategories(item.tasks);
                    this.renderTasks(item.tasks)
                }
            })
        })
    }

    renderTasks(arr) {
        const html = arr.map((item, index) => {
            return `
                <li data-id="${index}" class="todolist__item">
                    <div class="todolist__left">
                        <div class="todolist__status todolist__status_${item.statusTask}"></div>
                        <p class="todolist__text">${item.task}</p>
                    </div>
                    <div class="todolist__right">
                        <div class="todolist__date">${item.date}</div>
                        <button class="todolist__delete button button_large button_border">Delete</button>
                        <button class="todolist__edit button button_large button_fill">Edit</button>
                    </div>
                </li> 
            `
        }).join('');

        this.todoList.innerHTML = html;
    }

    tasksHTML(arr, status) {
        return arr.map((task, index) => {
            if (task.statusTask === status) {
                return `
                    <div data-id=${index} class="task" draggable="true">
                        <div class="task__title">${task.task}</div>
                        <div class="task__inner">
                            <div class="task__date">${task.date}</div>
                            <div class="task__buttons">
                                <button class="task_button-delete button button_small button_border">Delete</button>
                                <button class="task_button-edit button button_small button_fill">Edit</button>
                            </div>
                        </div>
                    </div>
                `
            }
        }).join('');
    }

    renderTasksForCategories(tasks) {
        const processTasksHTML = this.tasksHTML(tasks, 'process');
        const importantTasksHTML = this.tasksHTML(tasks, 'important');
        const doneTasksHTML = this.tasksHTML(tasks, 'done');

        this.processContainer.innerHTML = processTasksHTML;
        this.importantContainer.innerHTML = importantTasksHTML;
        this.doneContainer.innerHTML = doneTasksHTML;
    }
}