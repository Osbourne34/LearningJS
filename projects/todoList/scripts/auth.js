import { IsLogged } from "./isLogged.js";
import { Routing } from "./routing.js";

IsLogged.init();
Routing.init();

class Auth {
    constructor(authForm, login, password, inputs) {
        this.authForm = document.getElementById(authForm);
        this.login = document.getElementById(login);
        this.password = document.getElementById(password);
        this.inputs = document.querySelectorAll(inputs);
    }

    validate(event) {
        
    }

    signIn = (event) => {
        event.preventDefault();
        if(this.login.value !== '' && this.password.value !== '') {
            localStorage.setItem('isLogged', 'true');
            Routing.init();
        }
    }

    init() {
        this.authForm.addEventListener('submit', this.signIn);
        this.inputs.forEach(input => {
            input.addEventListener('input', this.validate);
        })
    }
}

const auth = new Auth('auth-form', 'login', 'password', '.input');
auth.init();