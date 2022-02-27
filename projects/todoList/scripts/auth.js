import { IsLogged } from "./isLogged.js";
import { Routing } from "./routing.js";

IsLogged.init();
Routing.init();

class Auth {
    constructor(authForm, login, password, inputs) {
        this.authForm = document.getElementById(authForm);
        this.login = document.getElementById(login);
        this.password = document.getElementById(password);
    }

    signIn = (event) => {
        event.preventDefault();

        const users = JSON.parse(localStorage.getItem('users'));

        if (users) {
            const login = this.login.value;
            const password = this.password.value;
            users.forEach((item, index) => {
                if (login === item.login && password === item.password) {
                    this.login.classList.remove('input_error');
                    this.password.classList.remove('input_error');
                    localStorage.setItem('isLogged', 'true');
                    localStorage.setItem('user', JSON.stringify(users[index].login));
                    Routing.init();
                } else {
                    this.login.classList.add('input_error');
                    this.password.classList.add('input_error');
                    this.password.value = '';
                }
            })
        } else {
            this.login.classList.add('input_error');
            this.password.classList.add('input_error');
            this.password.value = '';
        }
    }

    init() {
        this.authForm.addEventListener('submit', this.signIn);
    }
}

const auth = new Auth('auth-form', 'login', 'password', '.input');
auth.init();