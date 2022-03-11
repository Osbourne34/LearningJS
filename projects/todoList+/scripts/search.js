export class Search {
    constructor(searchInput, todoListContainer) {
        this.searchInput = document.querySelector(searchInput);
        this.todoListContainer = document.querySelector(todoListContainer);
        this.init();
    }

    search = () => {
        this.users = JSON.parse(localStorage.getItem('users'));
        this.user = JSON.parse(localStorage.getItem('user'));
        let todolistItems = document.querySelectorAll('.todolist__item');
        let inputValue = this.searchInput.value;

        this.users.find(item => {
            if (item.login === this.user) {
                todolistItems.forEach((item, index) => {
                    let task = item.children[0].children[1].innerText;
                    item.style.display = 'none';
                    if (task.includes(inputValue)) {
                        todolistItems[index].style.display = 'flex';
                    }
                })
            }
        });
    }

    init() {
        this.searchInput.addEventListener('input', this.search);
        document.addEventListener('DOMSubtreeModified', this.search);
    }
}