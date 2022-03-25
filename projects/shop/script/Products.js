import IndexedDB from './IndexedDB.js';

export default class Products {
    constructor(productList, loadMoreBtn, amountLoad) {
        this.productList = document.getElementById(productList);
        this.loadMoreBtn = document.getElementById(loadMoreBtn);
        this.amountLoad = amountLoad;
        this.start = 1;
        this.end = this.amountLoad;
        this.init();
    }

    async getProducts(start, end) {
        let items = [];
        
        for(let i = start; i <= end; i++) {
            const item = await IndexedDB.getItem('products', i);
            items.push(item);
        }
        
        return items;
    }

    async getCategories() {
        const result = await IndexedDB.getItems('products');

        const categoriesArr = result.map((item, index) => {
            return item.category;
        })

        const categories = categoriesArr.filter((item, index) => {
            return categoriesArr.indexOf(item) == index;
        })

        return categories;
    }

    async renderProducts(data) {

        const products = await data;

        const html = products.map((product) => {
            if(product) {
                return `
                <div data-id="${product.id}" class="col-3 product">
                    <div class="product__body">
                        <a class="product__link" href="#">
                            <img class="product__photo" src="${product.thumbnail}" alt="${product.title}">
                            <div class="product__info">
                                <div class="product__brand bg-secondary">${product.brand}</div>
                                <div class="product__name">${product.title}</div>
                                <div class="product__descr">${product.description}</div>
                            </div>
                        </a>
                        <div class="product__wrap">
                            <div class="product__price">${product.price}$</div>
                            <button class="btn btn-primary product__btn" title="Add to card">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    class="bi bi-cart2" viewBox="0 0 16 16">
                                    <path
                                        d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>  
            `
            } else {
                this.loadMoreBtn.style.display = 'none';
            }
        }).join('');

        this.productList.innerHTML += html;
    }

    init() {
        console.log(this.getCategories().then(a => console.log(a)));
        this.renderProducts(this.getProducts(this.start,this.end));
        this.loadMoreBtn.addEventListener('click', () => {
            this.start += this.amountLoad;
            this.end += this.amountLoad;
            this.renderProducts(this.getProducts(this.start,this.end));
        });
    }
}






/* 
<div class="col-3 product">
    <div class="product__body">
        <a class="product__link" href="#">
            <img class="product__photo" src="${item.thumbnail}" alt="${item.title}">
                <div class="product__info">
                    <div class="product__brand bg-secondary">${item.brand}</div>
                    <div class="product__name">${item.title}</div>
                    <div class="product__descr">${item.description}</div>
                </div>
        </a>
        <div class="product__wrap">
            <div class="product__price">${item.price}$</div>
            <button class="btn btn-primary product__btn" title="Add to card">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    class="bi bi-cart2" viewBox="0 0 16 16">
                    <path
                        d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
            </button>
        </div>
    </div>
</div>  
*/