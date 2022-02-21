class Todo {

    constructor(todoForm, inputDate, inputTitle, important) {
        this.todoForm = document.getElementById(todoForm);
        this.inputDate = document.getElementById(inputDate);
        this.inputTitle = document.getElementById(inputTitle);
        this.important = document.getElementById(important);

        this.init();
    }

    init() {

        const arr = [];

        this.todoForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const obj = {
                date: this.inputDate.value,
                title: this.inputTitle.value,
                important: this.important.checked,
            }


            this.inputDate.value = ''
            this.inputTitle.value = ''
            this.important.checked = ''

            arr.push(obj);

            localStorage.setItem('task', JSON.stringify(arr));

            let raw = localStorage.getItem('task');
            raw = JSON.parse(raw);

            const html = raw.map(item => {
                return `
                    <li class="todolist__item">
                        <div class="todolist__left">
                            <div class="todolist__status todolist__status_important"></div>
                            <p class="todolist__text">${item.title}</p>
                        </div>
                        <div class="todolist__right">
                            <div class="todolist__date">${item.date}</div>
                            <button class="todolist__delete button button_large button_border">Delete</button>
                            <button class="todolist__edit button button_large button_fill">Edit</button>
                        </div>
                    </li>
                `
            }).join('');
            document.querySelector('.todolist__list').innerHTML = html;
        });
    }
}

const todo = new Todo('todo-form', 'input-date', 'input-title', 'important');
