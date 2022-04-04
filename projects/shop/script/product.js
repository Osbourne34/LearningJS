import Basket from './Basket.js';
import Auth from './Auth.js';
import Userbar from './Userbar.js';

 // Корзина
 const basket = new Basket('basket-btn', 'basket-dropdown', 'basket-list', 'basket-amount', 'total-price', 'basket-clear-all');
 basket.init();

 //Авторизация
 const auth = new Auth('user-bar');
 auth.init();

 //Userbar
 const userbar = new Userbar('user-bar');
 userbar.init();


class Product {
    constructor() {

    }

    init() {
        
    }
} 

const product = new Product();
product.init();