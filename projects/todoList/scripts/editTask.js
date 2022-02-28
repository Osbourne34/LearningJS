export class EditTask {
    constructor(date, title, modal, modalForm, todoList) {
        this.date = document.getElementById(date);
        this.title = document.getElementById(title);
        this.modal = document.getElementById(modal);
        this.modalForm = document.getElementById(modalForm);
        this.todoList = document.querySelector(todoList);
        this.id = 0;
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

    showModal() {
        this.modal.classList.remove('close');
        this.modal.classList.add('open');
    }

    closeModal = (event) => {
        const target = event.target;
        if (target.id === 'modal-close' || target.id === 'modal') {
            this.modal.classList.remove('open');
            this.modal.classList.add('close');
        }
    }

    editStatus = (event) => {
        const target = event.target.closest('li');
        // localStorage.setItem('lastStatus', '');
        if (event.target.classList.contains('todolist__status')) {
            const id = target.dataset.id;
            const user = JSON.parse(localStorage.getItem('user'));
            const users = JSON.parse(localStorage.getItem('users'));

            const currentUser = users.find(item => {
                return item.login === user;
            });

            users.map(item => {
                if (item.login === user) {
                    if (item.tasks[id]) {
                        if (item.tasks[id].statusTask === 'important' || item.tasks[id].statusTask === 'process') {
                            localStorage.setItem('lastStatus', item.tasks[id].statusTask);
                            item.tasks[id].statusTask = 'done';
                        } else {
                            
                            item.tasks[id].statusTask = localStorage.getItem('lastStatus');
                        }
                    }
                }
            });

            localStorage.setItem('users', JSON.stringify(users));

            users.find(item => {
                if (item.login === user) {
                    this.renderTasks(item.tasks);
                }
            })
        }
    }

    editTask = (event) => {
        const target = event.target.closest('li');
        if (event.target.classList.contains('todolist__edit')) {
            this.id = target.dataset.id;
            this.showModal();

            const user = JSON.parse(localStorage.getItem('user'));
            const users = JSON.parse(localStorage.getItem('users'));

            const currentUser = users.find(item => {
                return item.login === user;
            });

            this.title.value = currentUser.tasks[this.id].task;
            this.date.value = currentUser.tasks[this.id].date;

            if (this.title.classList.contains('input_error') || this.date.classList.contains('input_error')) {
                this.title.classList.remove('input_error');
                this.date.classList.remove('input_error');
            }

        }
    }

    saveChange = (event) => {
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        const users = JSON.parse(localStorage.getItem('users'));

        users.map(item => {
            if (item.login === user) {
                if (this.date.value !== '' && this.title.value !== '') {
                    item.tasks[this.id].date = this.date.value;
                    item.tasks[this.id].task = this.title.value;

                    this.date.classList.remove('input_error');
                    this.title.classList.remove('input_error');

                    this.modal.classList.remove('open');
                    this.modal.classList.add('close');

                } else {
                    if (this.date.value === '') {
                        this.date.classList.add('input_error');
                    } else {
                        this.date.classList.remove('input_error');
                    }
                    if (this.title.value === '') {
                        this.title.classList.add('input_error');
                    } else {
                        this.title.classList.remove('input_error');
                    }
                }
            }
        });

        localStorage.setItem('users', JSON.stringify(users));

        users.find(item => {
            if (item.login === user) {
                this.renderTasks(item.tasks);
            }
        })

    }

    init() {
        window.addEventListener('click', this.editTask);
        window.addEventListener('click', this.closeModal);
        window.addEventListener('click', this.editStatus);
        this.modalForm.addEventListener('submit', this.saveChange);
    }
}