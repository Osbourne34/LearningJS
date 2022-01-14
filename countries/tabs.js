const content = document.querySelector('.content');
const tabs = document.querySelector('.tabs');
const data = createArr(100, 'Title', 'Text');
const a = 10;
const num = Math.ceil(data.length / a);
const tabsItem = [];
const next = document.createElement('button');
next.innerText = 'Next';
const prev = document.createElement('button');
prev.innerText = 'Prev';

function createArr(num, title, text) {
    let arr = [];
    for (i = 1; i <= num; i++) {
        arr.push({ id: i, title: title, text: text })
    }
    return arr;
}

const createTabs = (num) => {

    for (i = 1; i <= num; i++) {
        const li = document.createElement('li');
        li.innerHTML = i;
        li.classList.add('tab-item');
        tabsItem.push(li);
        tabs.insertAdjacentElement('afterbegin', prev);
        tabs.appendChild(li);
        tabs.insertAdjacentElement('beforeend', next);
    }
    return tabsItem;
}

const liList = createTabs(num);

liList.forEach((item, index) => {

    if (index === 0) {
        item.classList.add('active');
    }
    const html = data.slice(0, a).map(item => {
        return `
            <div class="content-item">
                <div>${item.id}</div>
                <div>${item.title}</div>
                <div>${item.text}</div>
            </div>
        `
    }).join('');

    content.innerHTML = html;

    item.addEventListener('click', () => {
        const numItem = item.innerHTML;
        const start = (numItem - 1) * a;
        const end = start + a;

        const html = (array) => {
            const arr = array.slice(start, end);
            const html = arr.map(item => {
                return `
                    <div class="content-item">
                        <div>${item.id}</div>
                        <div>${item.title}</div>
                        <div>${item.text}</div>
                    </div>
                `
            }).join('');
            content.innerHTML = html;
        }

        html(data);

        liList.forEach(item => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    });

});

next.addEventListener('click', () => {

    liList.forEach((item, index) => {
        if (item.classList.contains('active')) {


        }
    });

});