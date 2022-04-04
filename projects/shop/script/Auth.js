import Userbar from './Userbar.js';

export default class Auth extends Userbar {
    constructor(userbar) {
        super(userbar);
    }
    
    init() {
        document.addEventListener('click', (event) => {
            const logoutBtn = event.target.closest('#logout');

            if(logoutBtn) {
                localStorage.setItem('isLogged', false);
                localStorage.setItem('currentUser', null);
                location.reload();
            }
        })

        if(!localStorage.getItem('isLogged')) {
            localStorage.setItem('isLogged', false);
        }
        if(!localStorage.getItem('currentUser')) {
            localStorage.setItem('currentUser', null);
        }
    }
}