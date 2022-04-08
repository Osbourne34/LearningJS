export default class ProductIdRecord {

    setId(id) {
        sessionStorage.setItem('id', id);
    }

    init() {
        document.addEventListener('click', (event) => {
            const targetProductLink = event.target.closest('.product__link');
            const targetProduct = event.target.closest('.product');
            const targetBasketProductLink = event.target.closest('.basket__product-link');
            const targetBasketProduct = event.target.closest('.basket__product');

            if(targetProduct && targetProductLink) {
                const ID = +targetProduct.dataset.id;
                this.setId(ID);
            }
            if(targetBasketProductLink && targetBasketProduct) {
                const ID = +targetBasketProduct.dataset.id;
                this.setId(ID);
            }
        })
    }
}