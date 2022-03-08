export class DeleteTask {
    constructor(todoList) {
        this.todoList = document.querySelector(todoList);
        this.init();
    }

    deleteTask = (event) => {
        const target = event.target.closest('.todolist__item');
        if (event.target.classList.contains('todolist__delete')) {
            const users = JSON.parse(localStorage.getItem('users'));
            const user = JSON.parse(localStorage.getItem('user'));

            users.find(item => {
                if (item.login === user) {
                    return item.tasks.splice(target.dataset.id, 1);
                }
            });

            localStorage.setItem('users', JSON.stringify(users));
            target.remove();
            const taskItems = document.querySelectorAll('.todolist__item');
            taskItems.forEach((item, index) => {
                item.dataset.id = index;
            })
        }
        const targetCategories = event.target.closest('.task');
        if (event.target.classList.contains('task_button-delete')) {
            const users = JSON.parse(localStorage.getItem('users'));
            const user = JSON.parse(localStorage.getItem('user'));

            users.find(item => {
                if (item.login === user) {
                    return item.tasks.splice(targetCategories.dataset.id, 1);
                }
            });

            localStorage.setItem('users', JSON.stringify(users));
            targetCategories.remove();
            const taskItems = document.querySelectorAll('.task');
            taskItems.forEach((item, index) => {
                item.dataset.id = index;
            })
        }
    }

    init() {
        window.addEventListener('click', this.deleteTask)
    }
}