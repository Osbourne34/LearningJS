import { IsLogged } from "./isLogged.js";
import { Routing } from "./routing.js";
import { User } from "./user.js";

IsLogged.init();
Routing.init();

class SignUp {
    constructor(signUpForm, login, password) {
        this.signUpForm = document.getElementById(signUpForm);
        this.login = document.getElementById(login);
        this.password = document.getElementById(password);
    }

    setUsers() {
        if (localStorage.getItem('users')) {
            return;
        }
        localStorage.setItem('users', '[]');
    }

    signUp = (event) => {
        event.preventDefault();

        const user = new User(this.login.value, this.password.value);
        const users = JSON.parse(localStorage.getItem('users'));
        if (this.login.value !== '' && this.password.value !== '') {
            this.login.classList.remove('input_error');
            this.password.classList.remove('input_error');
            if(users.filter(item => item.login === user.login).length !== 0) {
                this.login.classList.add('input_error');
                console.log('yes');
            } else {
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));
                location.href = './auth.html';
            }
        }
        else {
            if (this.login.value === '') {
                this.login.classList.add('input_error');
            } else {
                this.login.classList.remove('input_error');
            }
            if (this.password.value === '') {
                this.password.classList.add('input_error');
            } else {
                this.password.classList.remove('input_error');
            }
        }
    }

    init() {
        this.setUsers();
        this.signUpForm.addEventListener('submit', this.signUp);
    }
}

const signUp = new SignUp('signup-form', 'login', 'password');
signUp.init();