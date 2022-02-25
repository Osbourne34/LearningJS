export class User {
    constructor(login, password) {
        this.login = login;
        this.password = password;
        this.tasks = [{
            task: '',
            date: '',
            important: false,
        }];
    }
}