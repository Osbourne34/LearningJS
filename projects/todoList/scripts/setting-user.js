export class SettingUser {
    constructor(
        settingUserForm,
        settingUserLogin,
        settingUserPassword,
        settingUserConfirmPassword,
        settingUserGeneratePassword,
        settingUserShowPassword,
        settingUserExitBtn
    )
    {
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
            if(item.login === user) {
                this.settingUserLogin.value = item.login;
                this.settingUserPassword.value = item.password;
                this.settingUserConfirmPassword.value = item.password;
            }
        })
    }

    showPassword = (event) => {
        const isCheck = event.target.checked;

        event.target.blur();

        if(isCheck) {
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

        
    }

    init() {
        this.setInputValue();
        this.settingUserShowPassword.addEventListener('click', this.showPassword);
        this.settingUserExitBtn.addEventListener('click', this.exitSettings);
        this.settingUserForm.addEventListener('submit', this.submitForm);
    }
}

const settingsUser = new SettingUser (
    '.setting-user__form',
    '#login',
    '#password',
    '#confirm-password',
    '.setting-user__generate-password',
    '.setting-user__show-password',
    '.setting-user__exit'
);