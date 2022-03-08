export class GoToSettings {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('click', (event) => {
            const target = event.target;
            if(target.id === 'settings') {
                location.href = './../setting-user.html';
            }
        })
    }
}