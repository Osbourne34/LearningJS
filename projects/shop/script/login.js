import IndexedDB from './IndexedDB.js';

class Login {
    constructor(loginForm, loginInput, loginPassword) {
        this.loginForm = document.getElementById(loginForm);
        this.loginInput = document.getElementById(loginInput);
        this.loginPassword = document.getElementById(loginPassword);
    }

    clearInputs(...inputs) {
        inputs.forEach(item => item.value = '');
    }
    addErrorClass(...inputs) {
        inputs.forEach(item => item.classList.add('input-error'));
    }
    deleteErrorClass(...inputs) {
        inputs.forEach(item => item.classList.add('input-error'));
    }

    init() {
        this.loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (this.loginInput.value.trim() && this.loginPassword.value.trim()) {
                const users = await IndexedDB.getItems('users');

                const user = users.find(item => {
                    if (this.loginInput.value === item.login) {
                        return item;
                    }
                })

                if (!user) {
                    this.addErrorClass(this.loginInput, this.loginPassword);
                } else {
                    if (user.password === this.loginPassword.value) {

                        this.deleteErrorClass(this.loginInput, this.loginPassword);
                        this.clearInputs(this.loginInput, this.loginPassword);

                        localStorage.setItem('isLogged', true);
                        localStorage.setItem('currentUser', user.login);
                        location.href = 'index.html'
                    } else {
                        this.addErrorClass(this.loginInput, this.loginPassword);
                    }
                }
            }
        })
        
    }
}

const login = new Login('login-form', 'login', 'password');
login.init();