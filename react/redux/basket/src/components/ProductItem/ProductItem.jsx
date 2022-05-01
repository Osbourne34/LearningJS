const ProductItem = ({ name, price, image, onAddToBasket }) => {

    return (
        <div className="product">
            <img
                className="product__image"
                src={image}
                alt={name}
            />
            <div className="product__inner">
                <h3>{name}</h3>
                <div className="product__price">{new Intl.NumberFormat('ru-RU').format(price)} UZS</div>
                <button
                    className="button"
                    onClick={onAddToBasket}
                >
                    Add to basket
                </button>
            </div>
        </div>
    )
}

export default ProductItem;