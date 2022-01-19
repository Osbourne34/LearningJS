import { search } from './search.js';
import { pagination } from './pagination.js';
const input = document.querySelector('.search__input');

export const render = (arrData, element) => {
    arrData.then(data => {

        const html = data.map(country => {
            return `
                <div class="country">
                    <div class="country__media">
                        <img class="country__flag" src="${country.media.flag}" alt="flag">
                        <img class="country__emblem" src="${country.media.emblem}" alt="embled">
                    </div>
                    <h2 class="country__name">${country.name}</h2>
                    <div class="country__capital">Столица: ${country.capital}</div>
                    <div class="country__currency">Валюта: ${country.currency}</div>
                    <div class="country__abbreviation">Сокращение: ${country.abbreviation}</div>
                    <div class="country__phone">Код: ${country.phone}</div>
                    <div class="country__population">Население: ${country.population}</div>
                </div>
            `
        }).join('');

        const dataLength = data.length;
        const countPages = 10;
        const countItem = Math.ceil(dataLength / countPages);
        const currentItem = 1;

        pagination(countItem, currentItem);

        console.log(pagination(countItem, currentItem));

        return html;
    }).then(html => {
        element.innerHTML = html;
        const countryName = document.querySelectorAll('.country__name');
        search(input, countryName);
    });
}

