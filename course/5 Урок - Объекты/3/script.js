const user = {
    users: [],
    registration() {
        const login = prompt('Login: ');
        const password = prompt('Password: ');
        
        const value = [login, password];
        this.users.push(value);
    },
    signIn() {
        if(this.users.length !== 0) {
            for(i = 0; i < 1; i++) {
                const login = prompt('Введите логин: ');
                const password = prompt('Введите пароль: ');

                if(login == this.users[0][0] && password == this.users[0][1]) {
                    console.log('Вы вошли!');
                } else {
                    i--;
                }
            }
        } else {
            alert('Пройдите регистрацию')
            this.registration();
        }
    },
}
