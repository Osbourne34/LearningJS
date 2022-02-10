const url = 'https://api.sampleapis.com/countries/countries';

class Countries {

    constructor(url, countries, searchInput, paginationList, countPages) {
        this.url = url;
        this.countries = document.querySelector(countries);
        this.searchInput = document.querySelector(searchInput);
        this.paginationList = document.querySelector(paginationList);
        this.countPages = countPages;
    }

    async getData(url) {
        const request = await fetch(url);
        const data = await request.json();
        return data;
    }

    render(array, element) {
        const html = array.map(country => {
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

        element.innerHTML = html;

        return document.querySelectorAll('.country__name');
    }

    search(searchInput, elements) {
        searchInput.addEventListener('input', () => {
            const inputValue = searchInput.value.toLowerCase();
            let newArr = Array.from(elements);

            if (inputValue != '') {
                elements.forEach(item => {
                    item.parentElement.style.display = 'none';
                });
                let foundElements = newArr.filter(item => {
                    return item.innerHTML.toLowerCase().includes(inputValue);
                });
                foundElements.forEach(item => {
                    item.parentElement.style.display = 'block';
                    item.style.backgroundColor = 'yellow';
                });
                this.pagination(foundElements, this.paginationList);
            } else {
                elements.forEach(item => {
                    item.parentElement.style.display = 'block';
                    item.style.backgroundColor = 'transparent';
                    this.pagination(elements, this.paginationList);
                });
            }
        });
    }

    showCountry = (array, numItem) => {
        let start = (numItem - 1) * this.countPages;
        let end = start + this.countPages;

        const newArray = Array.from(array);
        const countries = newArray.map(item => {
            return item.parentElement;
        });
        countries.forEach(item => {
            item.style.display = 'none';
        })
        countries.slice(start, end).forEach(item => {
            item.style.display = 'block';
        })
    }

    pagination(array, paginationList) {
        let elementsLength = array.length;
        let countPage = this.countPages;
        let countItems = Math.ceil(elementsLength / countPage);

        let currentItem = 1;

        const createItems = (countItems, currentItem) => {
            let li = '';
            let active;
            let afterItem = currentItem - 2;
            let beforeItem = currentItem + 2;

            if (currentItem != 1) {
                li += `<button class="prev"> prev </button>`
            } else {
                li += `<button class="prev" disabled> prev </button>`
            }

            if (currentItem > 3) {
                li += `<li class="pagination__item">1</li>`;
                if (currentItem > 4) {
                    li += `<li class="pagination__item">...</li>`;
                }
            }

            for (let i = afterItem; i <= beforeItem; i++) {
                if (i > countItems) {
                    continue;
                }
                if (i === 0) {
                    i++;
                }
                if (i === -1) {
                    i += 2;
                }
                if (currentItem === i) {
                    active = 'active';
                } else {
                    active = '';
                }
                li += `<li class="pagination__item ${active}">${i}</li>`
            }

            if (currentItem < countItems - 2) {
                if (currentItem < countItems - 3) {
                    li += `<li class="pagination__item">...</li>`;
                }
                li += `<li class="pagination__item">${countItems}</li>`;
            }

            if (currentItem < countItems) {
                li += `<button class="next"> next </button>`
            } else {
                li += `<button class="next" disabled> next </button>`
            }

            paginationList.innerHTML = li;

            const prev = document.querySelector('.prev');
            prev.addEventListener('click', () => {
                createItems(countItems, currentItem - 1);
                this.showCountry(array, currentItem - 1);
            });
            const next = document.querySelector('.next');
            next.addEventListener('click', () => {
                createItems(countItems, currentItem + 1);
                this.showCountry(array, currentItem + 1);
            });

            const activeItem = document.querySelector('.pagination__item.active');
            const paginationItems = document.querySelectorAll('.pagination__item');
            paginationItems.forEach((item, index, arr) => {
                item.addEventListener('click', () => {
                    if (arr[index].innerText === '...') {
                        return;
                    }
                    createItems(countItems, +arr[index].innerText);
                    this.showCountry(array, arr[index].innerHTML);
                });
            });

        }

        this.showCountry(array, currentItem);
        createItems(countItems, currentItem);
    }

    init() {
        this.getData(this.url)
            .then(data => {
                return this.render(data, this.countries);
            })
            .then(elements => {
                this.pagination(elements, this.paginationList);
                this.search(this.searchInput, elements);
            });
    }
}

const countries = new Countries(url, '.countries', '.search__input', '.pagination', 8);
countries.init();