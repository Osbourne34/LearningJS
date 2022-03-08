export class DragAndDrop {
    constructor(tasksItem, cells) {
        document.addEventListener('DOMContentLoaded', () => {
            this.taskItems = document.querySelectorAll(tasksItem);
            this.cells = document.querySelectorAll(cells);
            this.init();
        })
    }

    dragStart () {
        setTimeout(() => {
            this.classList.add('hide');
        }, 0)
    }
    dragEnd () {
        this.classList.remove('hide');
    }
    dragOver (even) {
        even.preventDefault();
    }
    dragEnter () {
        this.classList.add('hovered');
    }
    dragLeave () {
        this.classList.remove('hovered');
    }
    dragDrop () {
        this.classList.remove('hovered');
        if(this.id === 'important-container') {
            const users = JSON.parse(localStorage.getItem('users'));
            const user = JSON.parse(localStorage.getItem('user'));

            users.map(item => {
                if(item.login === user) {
                    item.tasks[document.querySelector('.hide').dataset.id].statusTask = 'important';
                }
            })

            localStorage.setItem('users', JSON.stringify(users));
        }
        if(this.id === 'done-container') {
            const users = JSON.parse(localStorage.getItem('users'));
            const user = JSON.parse(localStorage.getItem('user'));

            users.map(item => {
                if(item.login === user) {
                    item.tasks[document.querySelector('.hide').dataset.id].statusTask = 'done';
                }
            })

            localStorage.setItem('users', JSON.stringify(users));
        }
        if(this.id === 'process-container') {
            const users = JSON.parse(localStorage.getItem('users'));
            const user = JSON.parse(localStorage.getItem('user'));

            users.map(item => {
                if(item.login === user) {
                    item.tasks[document.querySelector('.hide').dataset.id].statusTask = 'process';
                }
            })

            localStorage.setItem('users', JSON.stringify(users));
        }
        this.append(document.querySelector('.hide'));
    }

    init() {

        window.addEventListener('DOMSubtreeModified', () => {
            const taskItems = document.querySelectorAll('.task');
            const cells = document.querySelectorAll('.category-container');

            taskItems.forEach(item => {
                item.addEventListener('dragstart', this.dragStart)
                item.addEventListener('dragend', this.dragEnd)
            })

            cells.forEach(item => {
                item.addEventListener('dragover', this.dragOver)
                item.addEventListener('dragenter', this.dragEnter)
                item.addEventListener('dragleave', this.dragLeave)
                item.addEventListener('drop', this.dragDrop)
            })
        })

        this.taskItems.forEach(item => {
            item.addEventListener('dragstart', this.dragStart)
            item.addEventListener('dragend', this.dragEnd)
        })

        this.cells.forEach(item => {
            item.addEventListener('dragover', this.dragOver)
            item.addEventListener('dragenter', this.dragEnter)
            item.addEventListener('dragleave', this.dragLeave)
            item.addEventListener('drop', this.dragDrop)
        })
    }
}
