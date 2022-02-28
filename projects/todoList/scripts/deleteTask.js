export class DeleteTask {
    constructor(todoList) {
        this.todoList = document.querySelector(todoList);
        this.init();
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

    deleteTask = (event) => {
        const target = event.target.closest('li');
        if (event.target.classList.contains('todolist__delete')) {
            const users = JSON.parse(localStorage.getItem('users'));
            const user = JSON.parse(localStorage.getItem('user'));

            users.find(item => {
                if (item.login === user) {
                    return item.tasks.splice(target.dataset.id, 1);
                }
            })
            localStorage.setItem('users', JSON.stringify(users));

            users.find(item => {
                if (item.login === user) {
                    this.renderTasks(item.tasks);
                }
            })
        }
    }

    init() {
        window.addEventListener('click', this.deleteTask)
    }
}