import IndexedDB from './IndexedDB.js';
import User from './User.js';
import MESSAGES from './messages.js';

export default class Register {
    constructor(registerForm, loginInput, passwordInput, confirmPasswordInput, errorTextLogin, errorTextPassword, errorTextConfirmPassword) {
        this.registerForm = document.getElementById(registerForm);
        this.loginInput = document.getElementById(loginInput);
        this.passwordInput = document.getElementById(passwordInput);
        this.confirmPasswordInput = document.getElementById(confirmPasswordInput);
    }

    errorText (elem, message) {
        elem.classList.add('input-error');
        const errorDiv = document.createElement('div');
        errorDiv.innerText = message;
        errorDiv.classList.add('text-error');
        elem.after(errorDiv);
    }

    removeInputError () {
        this.loginInput.classList.remove('input-error');
        this.passwordInput.classList.remove('input-error');
        this.confirmPasswordInput.classList.remove('input-error');
    }

    clearInputs(...inputs) {
        inputs.forEach(item => item.value = '');
    }

    async loginValidate() {
        const login = this.loginInput.value.trim();

        if (login) {
            const users = await IndexedDB.getItems('users');
            const user = users.find(item => {
                return item.login === login;
            })
            if (!user) {
                return true;
            } else {
                this.errorText(this.loginInput, MESSAGES.alreadyExists);
                return false;
            }
        }
        this.errorText(this.loginInput, MESSAGES.empty);
        return false;
    }

    passwordValidate() {
        if(this.passwordInput.value.trim() === this.confirmPasswordInput.value.trim()) {
            return true;
        } else {
            this.errorText(this.passwordInput, MESSAGES.password);
            this.errorText(this.confirmPasswordInput, MESSAGES.password);
            return false;
        }   
    }

    async validate() {
        this.removeInputError();
        if(document.querySelectorAll('.text-error')) {
            document.querySelectorAll('.text-error').forEach((item, index) => {
                item.remove();
            })
        }
        if(await this.loginValidate() && this.passwordValidate()) {
            const user = new User(this.loginInput.value.trim(), this.passwordInput.value.trim());
            IndexedDB.setItem('users', user);

            this.clearInputs(this.loginInput, this.passwordInput, this.confirmPasswordInput);
            location.href = './login.html'
        }
    }


    init() {
        this.registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            this.validate();
        })
    }
}

const register = new Register('register-form', 'login', 'password', 'confirm-password');
register.init();