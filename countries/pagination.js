const paginationList = document.querySelector('.pagination');

export function pagination(dataLength, currentItem) {

    let li = '';
    let active;
    let prevItem = currentItem - 2;
    let nextItem = currentItem + 2;

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

    for (let i = prevItem; i <= nextItem; i++) {
        if (i > dataLength) {
            continue;
        }
        if (i == -1) {
            i += 2;
        }
        if (i == 0) {
            i += 1;
        }

        if (currentItem === i) {
            active = 'active';
        } else {
            active = '';
        }
        li += `<li class="pagination__item ${active}">${i}</li>`;
    }
    if (currentItem < dataLength - 2) {
        if (currentItem < dataLength - 3) {
            li += `<li class="pagination__item">...</li>`;
        }
        li += `<li class="pagination__item">${dataLength}</li>`;
    }
    if (currentItem < dataLength) {
        li += `<button class="next"> next </button>`
    } else {
        li += `<button class="next" disabled> next </button>`
    }

    paginationList.innerHTML = li;

    const prev = document.querySelector('.prev');
    prev.addEventListener('click', () => {
        pagination(dataLength, currentItem - 1);
    });
    const next = document.querySelector('.next');
    next.addEventListener('click', () => {
        pagination(dataLength, currentItem + 1);
    });
    const activeItem = document.querySelector('.pagination__item.active');
    const paginationItems = document.querySelectorAll('.pagination__item');
    paginationItems.forEach((item, index, arr) => {
        item.addEventListener('click', () => {
            if (arr[index].innerText === '...') {
                return;
            }
            pagination(dataLength, +arr[index].innerText);
            console.log(countryItems);
        });
    });
}

