class ColorApp {
    constructor(selectToggle, selectDropdown, items, inputColor, chageButton) {
        this.selectToggle = document.querySelector(selectToggle);
        this.selectDropdown = document.querySelector(selectDropdown);
        this.items = document.querySelector(items);
        this.inputColor = document.querySelector(inputColor);
        this.chageButton = document.querySelector(chageButton);
        this.init();
    }

    createItems() {
        let items = [];
        for (let i = 1; i <= 12; i++) {
            let div = document.createElement('div');
            div.classList = 'item';
            div.innerText = `Lorem, ipsum. #${i}`;
            items.push(div);
            this.items.appendChild(div);
        }
        return items;
    }

    createSelectItems(array) {
        const html = array.map(item => {
            return `<li class="select__dropdown-item">${item.innerHTML}</li>`
        }).join('');

        this.selectDropdown.innerHTML = html;
    }

    selectItem() {
        let items = Array.from(this.selectDropdown.children);
        this.selectToggle.innerText = this.selectDropdown.children[0].innerHTML;
        for (let item of items) {
            item.addEventListener('click', () => {
                this.selectToggle.innerText = item.innerHTML;
                this.selectToggle.classList.remove('rotate-arrow');
                this.selectDropdown.classList.remove('open');
            });
        }
    }

    selectColor() {
        return this.inputColor.value;
    }

    change() {
        this.chageButton.addEventListener('click', () => {
            let current = this.selectToggle.innerHTML;
            let color = this.selectColor();

            let items = this.items.children;

            for(let item of items) {
                if(current === item.innerHTML) {
                    item.style.backgroundColor = color;
                }
            }
        });
    }

    select() {
        this.selectToggle.addEventListener('click', () => {
            this.selectToggle.classList.toggle('rotate-arrow');
            this.selectDropdown.classList.toggle('open');
        });
    }

    init() {
        this.createSelectItems(this.createItems());
        this.select();
        this.selectItem();
        this.change();
    }
}

const colorApp = new ColorApp(
    '.select__toggle',
    '.select__dropdown-list',
    '.items',
    '.input-color',
    '.button'
);
