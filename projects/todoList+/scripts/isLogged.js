export class IsLogged {
    static init() {
        if(!localStorage.getItem('isLogged')) {
            localStorage.setItem('isLogged', 'false');
            return JSON.parse(localStorage.getItem('isLogged'));
        } 
        return;
    }
}