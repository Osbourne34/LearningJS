export class SetUserName {
    constructor(userName) {
        this.userName = document.querySelector(userName);
    }

    init() {
        this.userName.innerHTML = JSON.parse(localStorage.getItem('user'));
    }
}