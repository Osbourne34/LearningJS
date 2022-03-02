export class DeleteTask {
    constructor(todoList) {
        this.todoList = document.querySelector(todoList);
        this.init();
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
            target.remove();
        }
    }

    init() {
        window.addEventListener('click', this.deleteTask)
    }
}