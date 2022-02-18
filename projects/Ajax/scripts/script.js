const url = 'https://randomuser.me/api/?results=10';
const scrollUrl = 'https://randomuser.me/api/?results=7';
const container = document.querySelector('.container');
const showMoreBtn = document.querySelector('.more');
const xhr = new XMLHttpRequest();

const render = (data, element) => {
    for(let item of data) {
        const user = document.createElement('div');
        user.classList = 'user';

        user.innerHTML = `
            <img class="user__photo" src="${item.picture.large}" alt="user">
            <div class="user__inner">
                <span class="user__last-name">${item.name.last}</span>
                <span class="user__first-name">${item.name.first}</span>
                <div class="user__email">${item.email}</div>
            </div>`;

        container.append(user);
    }
}

const AJAX = (url) => {
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = () => {
        render(xhr.response.results, container)
    }
}

AJAX(url);

window.addEventListener('scroll', () => {
    let bodyHeight = document.body.offsetHeight;
    let yOffset = window.pageYOffset;
    let windowHeight = window.innerHeight;
    let y = yOffset + windowHeight;

    if(y >= bodyHeight) {
        AJAX(scrollUrl);
    }
});
