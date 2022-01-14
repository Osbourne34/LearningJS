const url = 'https://api.sampleapis.com/countries/countries';
const searchInput = document.querySelector('.search__input');

const getData = async (url) => {
    const get = await fetch(url);
    const data = await get.json();
    return data;
}

const toHTML = (country) => {
    return `
    <div class="country">
        <div class="country__media">
            <img class="country__flag" src="${country.media.flag}" alt="flag">
            <img class="country__emblem" src="${country.media.emblem}" alt="embled">
        </div>
        <h2 class="country__name">${country.name}</h2>
        <div class="country__capital">
            Столица: ${country.capital}
        </div>
        <div class="country__currency">
            Валюта: ${country.currency} 
        </div>
        <div class="country__abbreviation">
            Сокращение: ${country.abbreviation} 
        </div>
        <div class="country__phone">
            Код: ${country.phone} 
        </div>
        <div class="country__population">
            Население: ${country.population} 
        </div>
    </div>
`
}

const render = (countries) => {
    const html = countries.map(country => toHTML(country)).join('');
    document.querySelector('.countries').innerHTML = html;
}

getData(url).then(countries => {
    render(countries);


    searchInput.addEventListener('input', () => {
        let value = searchInput.value.toLowerCase();
        let newarr = countries.map(item => {
            const nameLowerCase = item.name.toLowerCase();
            if (nameLowerCase.includes(value)) {
                return item;
            };
        });
        let arr = newarr.filter(item => {
            return item !== undefined;
        });
        render(arr);
    });
});





