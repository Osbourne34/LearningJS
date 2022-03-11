const url = 'wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&notify_self';
const sendBtn = document.querySelector('.send');
const windowChat = document.querySelector('.window-chat');
const textarea = document.querySelector('.textarea');
const chat = document.querySelector('.chat');
const auth = document.querySelector('.auth');
const inputLogin = document.querySelector('input');
const authBtn = document.querySelector('.auth-btn');

const socket = new WebSocket(url);
const data = {
    name: '',
    value: ''
}

chat.style.display = 'none';

authBtn.addEventListener('click', () => {
    if(inputLogin.value.trim() !== '') {
        chat.style.display = 'block';
        auth.style.display = 'none';
        data.name = inputLogin.value;
    }
});

sendBtn.addEventListener('click', () => {
    if (textarea.value.trim() !== '') {
        data.value = textarea.value;
        socket.send(JSON.stringify(data));
        textarea.value = '';
    }

    socket.onmessage = function (event) {
        let data = JSON.parse(event.data);

        const div = document.createElement('div');
        div.classList.add('message');

        const date = new Date();
        const hours = date.getHours();
        let minutes = date.getMinutes();

        if(minutes < 10) {
            minutes = '0' + minutes;
        }
    
        const messageHTML = `
            <div class="message__time">${hours}:${minutes}</div>
            <div class="message__user-name">${data.name}</div>
            <div class="message__value">${data.value}</div>
        `
    
        div.innerHTML = messageHTML;
        windowChat.append(div);
    
    }
})