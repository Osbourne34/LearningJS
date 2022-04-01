import IndexedDB from './IndexedDB.js';

export default class Products {
    constructor(productList, loadMoreBtn, categories, amountLoad) {
        this.productList = document.getElementById(productList);
        this.loadMoreBtn = document.getElementById(loadMoreBtn);
        this.categories = document.getElementById(categories)
        this.amountLoad = amountLoad;

        this.start = 0;
        this.end = this.amountLoad;
    }

    async getProducts() {
        return await IndexedDB.getItems('products');
    }

    async getCategories(data) {
        const result = await data;

        const categoriesArr = result.map(item => {
            return item.category;
        })

        const categories = categoriesArr.filter((item, index) => {
            return categoriesArr.indexOf(item) === index;
        })

        return categories;
    }

    async renderCategoriesBtn(data) {
        const result = await data;

        this.categories.append(this.createElement('button', 'All', 'btn', 'btn-outline-primary', 'categories-btn', 'active'));

        for (let category of result) {
            this.categories.append(this.createElement('button', category, 'btn', 'btn-outline-primary', 'categories-btn'));
        }
    }

    createElement(elem, content, ...classes) {
        const element = document.createElement(elem);
        element.innerText = content;
        element.className = classes.join(' ');

        return element;
    }

    async renderProducts(data) {

        const products = await data;

        const html = products.map((product) => {
            if (product) {
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

    async init() {
        await this.renderCategoriesBtn(this.getCategories(this.getProducts()));

        const firstCategoryBtn = document.querySelector('.categories-btn');

        if (firstCategoryBtn.classList.contains('active')) {
            this.getProducts().then(res => {
                if (res.length > this.amountLoad) {
                    let arr = [];
                    for (let i = 0; i < this.amountLoad; i++) {
                        arr.push(res[i]);
                    }
                    this.renderProducts(arr);
                } else {
                    this.loadMoreBtn.style.display = 'none';
                }
            })
        }

        document.addEventListener('click', async (e) => {
            const target = e.target.closest('.categories-btn');

            if (target && !target.classList.contains('active')) {
                document.querySelectorAll('.categories-btn').forEach(item => item.classList.remove('active'));
                target.classList.add('active');

                this.start = 0;
                this.end = this.amountLoad;

                const products = await this.getProducts();
                const filteredProducts = products.filter(product => {
                    if (target.innerHTML === product.category) {
                        return true;
                    } else if (target.innerHTML === 'All') {
                        return true;
                    }
                })

                if (filteredProducts.length > this.amountLoad) {
                    this.loadMoreBtn.style.display = 'block';
                    let arr = [];
                    for (let i = 1; i <= this.amountLoad; i++) {
                        arr.push(filteredProducts[i]);
                    }
                    this.productList.innerHTML = '';
                    this.renderProducts(arr);
                } else {
                    this.productList.innerHTML = '';
                    this.renderProducts(filteredProducts);
                    this.loadMoreBtn.style.display = 'none';
                }
            }
        })

        this.loadMoreBtn.addEventListener('click', async () => {
            const btns = document.querySelectorAll('.categories-btn');
            let activeBtn;
            btns.forEach(btn => {
                if (btn.classList.contains('active')) {
                    activeBtn = btn.innerHTML;
                }
            })

            const result = await this.getProducts();
            const filteredProducts = result.filter(product => {
                if (activeBtn === product.category) {
                    return true;
                } else if (activeBtn === 'All') {
                    return true;
                }
            })

            this.start += this.amountLoad;
            this.end += this.amountLoad;

            let arr = [];
            for(let i = this.start; i < this.end; i++) {
                arr.push(filteredProducts[i]);
            }
            this.renderProducts(arr);
        })
    }
}
