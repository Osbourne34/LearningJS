export class SettingUser {
    constructor(
        settingUserForm,
        settingUserLogin,
        settingUserPassword,
        settingUserConfirmPassword,
        settingUserGeneratePassword,
        settingUserShowPassword,
        settingUserExitBtn
    ) {
        this.settingUserForm = document.querySelector(settingUserForm);
        this.settingUserLogin = document.querySelector(settingUserLogin);
        this.settingUserPassword = document.querySelector(settingUserPassword);
        this.settingUserConfirmPassword = document.querySelector(settingUserConfirmPassword);
        this.settingUserGeneratePassword = document.querySelector(settingUserGeneratePassword);
        this.settingUserShowPassword = document.querySelector(settingUserShowPassword);
        this.settingUserExitBtn = document.querySelector(settingUserExitBtn);

        this.init();
    }

    setInputValue() {
        const users = JSON.parse(localStorage.getItem('users'));
        const user = JSON.parse(localStorage.getItem('user'));

        users.forEach(item => {
            if (item.login === user) {
                this.settingUserLogin.value = item.login;
                this.settingUserPassword.value = item.password;
                this.settingUserConfirmPassword.value = item.password;
            }
        })
    }

    showPassword = (event) => {
        const isCheck = event.target.checked;

        event.target.blur();

        if (isCheck) {
            this.settingUserPassword.type = 'text';
            this.settingUserConfirmPassword.type = 'text';
        } else {
            this.settingUserPassword.type = 'password';
            this.settingUserConfirmPassword.type = 'password';
        }
    }

    exitSettings() {
        location.href = './../index.html';
    }

    submitForm = (event) => {
        event.preventDefault();

        const users = JSON.parse(localStorage.getItem('users'));
        const user = JSON.parse(localStorage.getItem('user'));

        const currentUser = users.find(item => {
            if (item.login === user) {
                return item;
            }
        });

        if (this.settingUserLogin.value.trim() !== '' && this.settingUserPassword.value.trim() !== '' && this.settingUserConfirmPassword.value.trim() !== '') {
            for (let user of users) {
                if (user.login === this.settingUserLogin.value) {
                    this.settingUserLogin.classList.add('input_error');
                    return;
                } else {
                    this.settingUserLogin.classList.remove('input_error');
                    currentUser.login = this.settingUserLogin.value;
                }
            }


            if (this.settingUserPassword.value === this.settingUserConfirmPassword.value) {
                currentUser.password = this.settingUserPassword.value;
                this.settingUserPassword.classList.remove('input_error');
                this.settingUserConfirmPassword.classList.remove('input_error');
            } else {
                this.settingUserPassword.classList.add('input_error');
                this.settingUserConfirmPassword.classList.add('input_error');
                return;
            }

            localStorage.setItem('users', JSON.stringify(users));

        } else {
            if (this.settingUserLogin.value === '') {
                this.settingUserLogin.classList.add('input_error');
            }
        }
    }

    init() {
        this.setInputValue();
        this.settingUserShowPassword.addEventListener('click', this.showPassword);
        this.settingUserExitBtn.addEventListener('click', this.exitSettings);
        this.settingUserForm.addEventListener('submit', this.submitForm);
    }
}

const settingsUser = new SettingUser(
    '.setting-user__form',
    '#login',
    '#password',
    '#confirm-password',
    '.setting-user__generate-password',
    '.setting-user__show-password',
    '.setting-user__exit'
);