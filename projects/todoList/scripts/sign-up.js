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

    signUp = (event) => {
        event.preventDefault();

        const user = new User(this.login.value, this.password.value);

        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        
        location.href = './auth.html';

    }

    init() {
        this.signUpForm.addEventListener('submit', this.signUp);
    }
}

const signUp = new SignUp('signup-form', 'login', 'password');
signUp.init();