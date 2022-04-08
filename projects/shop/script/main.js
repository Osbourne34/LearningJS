import { databaseEntry } from './database-entry.js';
import Products from './Products.js';
import Basket from './Basket.js';
import Auth from './Auth.js';
import Userbar from './Userbar.js';
import ProductIdRecord from './productIdRecord.js';

document.addEventListener('DOMContentLoaded', () => {
    // Запись исходных данных в базу данных;
    databaseEntry();

    // Отображение продуктов
    const products = new Products('products', 'load-more', 'categories', 12);
    products.init();

    // Корзина
    const basket = new Basket('basket-btn', 'basket-dropdown', 'basket-list', 'basket-amount', 'total-price', 'basket-clear-all');
    basket.init();

    //Авторизация
    const auth = new Auth('user-bar');
    auth.init();

    //Userbar
    const userbar = new Userbar('user-bar');
    userbar.init();

    //ProductIdRecord
    const productIdRecord = new ProductIdRecord();
    productIdRecord.init();
})