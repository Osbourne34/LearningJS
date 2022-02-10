const url = 'https://api.sampleapis.com/recipes/recipes';
const wrap = document.querySelector('.wrap');

function getDate(url) {
    return new Promise((res, rej) => {
        const get = fetch(url);
        const data = get.then(data => data.json());
        res(data);
    });
};

function createCard(photoUrl, title, tags) {
    const card = document.createElement('div');
    card.classList.add('card');

    const content = `
        <img src="${photoUrl}">
        <div class="content">
            <h2>${title}</h2>
            <div class="card__bottom">
                <p>${tags}</p>
                <button class="card__button">Delete Card</button>
            </div>
        <div>
    `
    card.innerHTML = content;
    return card;
}

function addCard(card) {
    return wrap.appendChild(card);
}

getDate(url)
    .then(data => {

        data.forEach(item => {
            const { photoUrl, title, tags } = item;
            addCard(createCard(photoUrl, title, tags));
        });
        const cards = document.querySelectorAll('.card');
        const buttons = document.querySelectorAll('.card__button');
        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                cards[index].remove();
            });
        });
    });




