import { modal } from "./Modal.js";
import IndexedDB from "./IndexedDB.js";

export default class Basket {
    constructor(addToCartButton, basketList, basketBtn, basketDropdown, basketNumbers) {
        this.addToCartButton = document.getElementById(addToCartButton);
        this.basketList = document.getElementById(basketList);
        this.basketBtn = document.getElementById(basketBtn);
        this.basketDropdown = document.getElementById(basketDropdown);
        this.basketNumbers = document.getElementById(basketNumbers);
    }

    async render(data) {

        const products = await data;

        if(products.length === 0) {
            const p = document.createElement('p');
            p.innerHTML = 'No Items'
            this.basketList.append(p);
        } else {
            const html = products.map(product => {
                return `
                    <li class="basket__product">
                        <a href="#" class="basket__product-left">
                            <img src="${product.thumbnail}" alt="${product.title}"
                                class="basket__product-photo">
                            <div class="basket__product-info">
                                <div class="basket__product-title">${product.title}</div>
                                <div class="basket__product-price">${product.price}$</div>
                            </div>
                        </a>
                        <div class="basket__product-right">
                            <input class="form-control btn-sm basket__product-number" type="number" value='1'>
                            <button class="btn btn-danger">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                                    fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg>
                            </button>
                        </div>
                    </li>
                `
            }).join('');

            this.basketList.innerHTML = html;
        }
    }

    async getCurrentUserBasket() {
        const users = await IndexedDB.getItems('users');
        const currenUser = localStorage.getItem('currentUser');

        const user = users.find(item => {
            if (item.login === currenUser) {
                return item;
            }
        })

        return user.basket;
    }

    async addProductToBasket(e) {
        const id = +e.target.closest('.product').dataset.id;
        const product = await IndexedDB.getItem('products', id);
        const users = await IndexedDB.getItems('users');
        const currenUser = localStorage.getItem('currentUser');

        const user = users.find(item => {
            if (item.login === currenUser) {
                return item;
            }
        })

        user.basket.push(product);

        IndexedDB.editing('users', user);

        this.render(user.basket);
        this.setBasketQuantity();
    }

    async setBasketQuantity() {
        const quantityProduct = await this.getCurrentUserBasket();
        this.basketNumbers.innerText = quantityProduct.length;
    }

    init() {
        document.addEventListener('click', (event) => {
            const targetProductBasketBtn = event.target.closest('.product__btn');
            const targetBasketBtn = event.target.closest('#basket-btn');
            const targetBasketDropdown = event.target.closest('#basket-dropdown');

            if (this.basketDropdown.classList.contains('open') && !targetBasketBtn) {
                if (!targetBasketDropdown) {
                    this.basketDropdown.classList.remove('open');
                }
            }

            if (targetProductBasketBtn) {
                const isLogged = JSON.parse(localStorage.getItem('isLogged'));

                if (!isLogged) {
                    modal.modalOpen();
                } else {
                    this.addProductToBasket(event);
                }
            }
        })

        this.basketBtn.addEventListener('click', () => {
            this.basketDropdown.classList.toggle('open');
        })

        this.render(this.getCurrentUserBasket());
        this.setBasketQuantity();
    }
}





/* 

<li class="basket__product">
    <a href="#" class="basket__product-left">
        <img src="https://dummyjson.com/image/i/products/2/thumbnail.jpg" alt=""
            class="basket__product-photo">
        <div class="basket__product-info">
            <div class="basket__product-title">iPhone X</div>
            <div class="basket__product-price">899$</div>
        </div>
    </a>
    <div class="basket__product-right">
        <input class="form-control btn-sm basket__product-number" type="number" value='1'>
        <button class="btn btn-danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
            </svg>
        </button>
    </div>
</li>

*/