export class Routing {
    static init() {
        const isLogged = JSON.parse(localStorage.getItem('isLogged'));

        if(isLogged === false) {
            if(location.pathname.includes('auth.html') || location.pathname.includes('sign-up.html')) {
                return;
            } else {
                location.href = './auth.html';
            }
        } else {
            if(location.pathname.includes('auth.html') || location.pathname.includes('sign-up.html')) {
                location.href = './index.html';
            }
        }
    }
}