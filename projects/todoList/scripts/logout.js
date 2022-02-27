import { Routing } from "./routing.js";

export class Logout {
    constructor(logoutBtn) {
        this.logoutBtn = document.getElementById(logoutBtn);
    }

    logout() {
        localStorage.setItem('isLogged', 'false');
        localStorage.removeItem('user');
        Routing.init();
    }

    init() {
        this.logoutBtn.addEventListener('click', this.logout);
    }
}