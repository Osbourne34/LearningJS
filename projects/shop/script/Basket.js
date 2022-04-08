import { modal } from "./Modal.js";
import IndexedDB from "./IndexedDB.js";

export default class Basket {
    constructor(basketBtn, basketDropdown, basketList, basketAmount, basketTotalPrice, basketClearAllBtn) {
        this.basketBtn = document.getElementById(basketBtn);
        this.basketDropdown = document.getElementById(basketDropdown);
        this.basketList = document.getElementById(basketList);
        this.basketAmount = document.getElementById(basketAmount);
        this.basketTotalPrice = document.getElementById(basketTotalPrice);
        this.basketClearAllBtn = document.getElementById(basketClearAllBtn)
    }

    async currentUser() {
        const getCurrentUser = localStorage.getItem('currentUser');
        if (getCurrentUser) {
            return await IndexedDB.getItem('users', getCurrentUser);
        }
        return;
    }

    async getProduct(id) {
        return await IndexedDB.getItem('products', id)
    }

    writeChanges(storeName, data) {
        IndexedDB.editing(storeName, data);
    }

    async render() {
        const currentUser = await this.currentUser();
        if (currentUser && currentUser.basket.length !== 0) {
            const basket = currentUser.basket;

            const html = basket.map(product => {
                return `
                        <li data-id="${product.id}" class="basket__product">
                            <a href="./product.html" class="basket__product-link">
                                <img src="${product.thumbnail}" alt="${product.title}"
                                    class="basket__product-photo">
                                <div class="basket__product-info">
                                    <div class="basket__product-title">${product.title}</div>
                                    <div class="basket__product-price">${product.price}$</div>
                                </div>
                            </a>
                            <div class="basket__product-right">
                                <input class="form-control btn-sm basket__product-number" type="number" value='${product.amount}' min="1">
                                <button class="btn btn-danger basket__product-remove">
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
        } else {
            this.basketList.innerHTML = `Cart is empty`
        }
    }

    async removeProductFromBasket(id) {
        const currentUser = await this.currentUser();

        const remaining = currentUser.basket.filter(item => {
            if (item.id !== id) {
                return true;
            }
        })

        currentUser.basket = remaining;
        this.writeChanges('users', currentUser);
    }

    async removeAllProductsFromBasket() {
        const currentUser = await this.currentUser();

        currentUser.basket.length = 0;

        this.writeChanges('users', currentUser);
    }

    async totalPrice() {
        const currentUser = await this.currentUser();
        if (currentUser && currentUser.basket.length !== 0) {
            const basket = currentUser.basket;

            const basketTotalPrice = basket.map(item => {
                return item.amount * item.price;
            }).reduce((startNum, nextNum) => {
                return startNum + nextNum;
            })

            this.basketTotalPrice.innerText = `Total price: ${basketTotalPrice}$`;
        } else {
            this.basketTotalPrice.innerText = `Total price: 0$`;
        }
    }

    async amountBasket() {
        const currentUser = await this.currentUser();
        if (currentUser) {
            const basket = currentUser.basket;

            if (basket.length !== 0) {
                const amountProducts = basket.map(item => {
                    return item.amount;
                }).reduce((startNum, nextNum) => {
                    return startNum + nextNum
                })
                this.basketAmount.innerText = amountProducts;
            } else {
                this.basketAmount.innerText = 0;
            }
        } else {
            return;
        }
    }

    async changeAmount(value, id) {
        const currentUser = await this.currentUser();

        currentUser.basket.map(item => {
            if (item.id === id) {
                item.amount = value;
            }
        })

        this.writeChanges('users', currentUser);
    }

    async addProductToBasket(id) {
        const currentUser = await this.currentUser();
        const product = await this.getProduct(id);

        product.amount = 1;

        const sameProduct = () => {
            for (let i = 0; i < currentUser.basket.length; i++) {
                if (currentUser.basket[i].id === id) {
                    return true;
                }
            }
            return false;
        }

        if (sameProduct()) {
            currentUser.basket.find(item => {
                if (item.id === id) {
                    item.amount++;
                }
            });
        } else {
            currentUser.basket.push(product);
        }

        this.writeChanges('users', currentUser);
    }

    init() {
        // Делегирование
        document.addEventListener('click', async (event) => {
            // Кнопка добавление в корзину у продукта.
            const targetProductBasketBtn = event.target.closest('.product__btn');
            const targetProductAddFromBasket = event.target.closest('.product__button-add');
            const isLogged = JSON.parse(localStorage.getItem('isLogged'));

            const product = event.target.closest('.product');

            if (targetProductBasketBtn) {
                if (isLogged) {
                    const productID = +product.dataset.id;
                    await this.addProductToBasket(productID);
                    await this.render();
                    await this.amountBasket();
                    await this.totalPrice();
                } else {
                    modal.modalOpen();
                }
            }

            if(targetProductAddFromBasket) {
                if (isLogged) {
                    const productID = +sessionStorage.getItem('id');
                    await this.addProductToBasket(productID);
                    await this.render();
                    await this.amountBasket();
                    await this.totalPrice();
                } else {
                    modal.modalOpen();
                }
            }

            // Закрытие выпадающей корзины при клике в другом месте.
            const targetDropdown = event.target.closest('#basket-dropdown');
            const targetBasketBtn = event.target.closest('#basket-btn');

            if (!targetDropdown && !targetBasketBtn && this.basketDropdown.classList.contains('open')) {
                this.basketDropdown.classList.remove('open');
            }

            //Удаление товара из корзины
            const targetBasketRemoveProduct = event.target.closest('.basket__product-remove');
            const basketProduct = event.target.closest('.basket__product');

            if (targetBasketRemoveProduct) {
                const productID = +basketProduct.dataset.id;
                await this.removeProductFromBasket(productID);
                await this.render();
                await this.amountBasket();
                await this.totalPrice();
            }
        })

        this.basketList.addEventListener('change', async (event) => {
            // Счетчик товара в корзине.
            const basketCounterAmount = +event.target.closest('.basket__product-number').value;
            const basketProductID = +event.target.closest('.basket__product').dataset.id;

            await this.changeAmount(basketCounterAmount, basketProductID);
            await this.amountBasket();
            await this.totalPrice();
        })

        this.basketClearAllBtn.addEventListener('click', async () => {
            await this.removeAllProductsFromBasket();
            await this.render();
            await this.amountBasket();
            await this.totalPrice();
        });

        // Кнопка корзины для отображения выпадающей корзины.
        this.basketBtn.addEventListener('click', () => {
            this.basketDropdown.classList.toggle('open');
        });

        this.render();
        this.amountBasket();
        this.totalPrice();
    }
}