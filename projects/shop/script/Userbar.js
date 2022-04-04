export default class Userbar {
    constructor(userbar) {
        this.userbar = document.getElementById(userbar);
    }

    forAuthorized() {
        this.userbar.innerHTML = `
            <li class="user-bar__item">
                <button class="btn btn-primary">Cabinet</button>
            </li>
            <li class="user-bar__item" id="logout">
                <button class="btn btn-outline-primary">Logout</button>
            </li>
            
        `
    }

    forUnauthorized() {
        this.userbar.innerHTML = `
            <li class="user-bar__item">
                <a class="btn btn-primary" href="login.html">Sign in</a>
            </li>
            <li class="user-bar__item">
                <a class="btn btn-outline-primary" href="register.html">Sign up</a>
            </li>
        `
    }

    renderUserbar() {
        const isLogged = JSON.parse(localStorage.getItem('isLogged'));
        if (isLogged) {
            this.forAuthorized();
        } else {
            this.forUnauthorized();
        }
    }

    init() {
        this.renderUserbar();
    }
}

