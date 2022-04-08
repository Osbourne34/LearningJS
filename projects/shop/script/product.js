import Basket from './Basket.js';
import Auth from './Auth.js';
import Userbar from './Userbar.js';
import ProductIdRecord from './productIdRecord.js';
import IndexedDB from "./IndexedDB.js";

class Product {
    constructor(productWrap) {
        this.productWrap = document.getElementById(productWrap);
    }

    getIDProduct() {
        return +sessionStorage.getItem('id');
    }
    async getProduct(id) {
        return await IndexedDB.getItem('products', id);
    }

    async renderProduct() {
        const product = await this.getProduct(this.getIDProduct());

        this.productWrap.innerHTML = `
            <div class="product__preview col-7">

                <ul class="product__preview-list">
                   
                </ul>
                <div class="product__preview-image">
                    
                </div>

            </div>
            <div class="product__info col-5">

                <h1 class="product__title">${product.title}</h1>
                <div class="product__category">${product.category}</div>
                <div class="product__price">Price: ${product.price}$</div>
                <div class="product__forms">
                    <button class="product__button-add btn btn-lg btn-primary">Add to Cart</button>
                </div>
                <div class="product__description">Description:
                    <div class="product__description-text">${product.description}</div>
                </div>

            </div>
        `
    }

    async displayPreviewImage() {
        const product = await this.getProduct(this.getIDProduct());
        const productPreviewList = document.querySelector('.product__preview-list');
        const productPreviewImage = document.querySelector('.product__preview-image');

        const htmlImages = product.images.map(image => {
            return `
                <li class="product__preview-item">
                    <img src="${image}" alt="product-preview">
                </li>
            `
        }).join('');

        productPreviewList.innerHTML = htmlImages;
        productPreviewImage.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
        `
    }

    init() {
        this.renderProduct();
        this.displayPreviewImage();

        this.productWrap.addEventListener('click', (event) => {
            const targetPreviewItem = event.target.closest('.product__preview-item');
            const PreviewImage = document.querySelector('.product__preview-image img');

            if (targetPreviewItem) {
                const imagePath = targetPreviewItem.children[0].src;
                PreviewImage.src = imagePath;
            }
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
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

    //Product
    const product = new Product('product');
    product.init();
});



/* <div class="product__preview col-7">

<ul class="product__preview-list">
    <li class="product__preview-item">
        <img src="https://dummyjson.com/image/i/products/1/1.jpg" alt="">
    </li>
    <li class="product__preview-item">
        <img src="https://dummyjson.com/image/i/products/1/2.jpg" alt="">
    </li>
    <li class="product__preview-item">
        <img src="https://dummyjson.com/image/i/products/1/3.jpg" alt="">
    </li>
</ul>
<div class="product__preview-image">
    <img src="https://dummyjson.com/image/i/products/1/thumbnail.jpg" alt="">
</div>

</div>
<div class="product__info col-5">

<h1 class="product__title">iPhone 9</h1>
<div class="product__category">smartphones</div>
<div class="product__price">Price: 549$</div>
<div class="product__forms">
    <input class="form-control btn-lg product__forms-number" type="number" value="1" min="1">
    <button class="product__button-add btn btn-lg btn-primary">Add to Cart</button>
</div>
<div class="product__description">Description:
    <div class="product__description-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quia, cupiditate iste. Sapiente fugit unde nam totam quo facilis placeat possimus, doloribus
        labore vel saepe dolorum. Placeat autem recusandae maxime! Veniam!</div>
</div>

</div> */