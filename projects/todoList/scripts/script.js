class Todo {

    constructor(date, todoValue, important, form, search, todoList) {
        this.date = document.getElementById(date);
        this.todoValue = document.getElementById(todoValue);
        this.important = document.getElementById(important);
        this.form = document.getElementById(form)
        this.search = document.getElementById(search);
        this.todoList = document.getElementById(todoList);

        this.init();
    }

    

    init() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            if(this.date.value === '') {
                console.log('пусто');
            } else {
                console.log(this.date.value);
            }
            console.log(this.todoValue.value);
            console.dir(this.important.checked);
        })
        localStorage.setItem('name', 'jenya');
        console.log(localStorage.getItem('name'));
        console.log(localStorage.length);
        console.log(localStorage.name);
    }
}

const todo = new Todo('date', 'todo-value', 'important', 'form', 'search', 'todo-list');