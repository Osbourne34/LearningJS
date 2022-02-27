export class User {
    constructor(login, password) {
        this.login = login;
        this.password = password;
        this.tasks = [];
    }
}