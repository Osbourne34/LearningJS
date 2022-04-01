export default class Auth {
    init() {
        if(!localStorage.getItem('isLogged')) {
            localStorage.setItem('isLogged', false);
        }
        if(!localStorage.getItem('currentUser')) {
            localStorage.setItem('currentUser', null);
        }
    }
}