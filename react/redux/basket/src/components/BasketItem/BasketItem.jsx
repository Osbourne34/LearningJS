const BasketItem = ({name, price, image, quantity}) => {
    return (
        <li className="basket-item">
            <div className="basket-item__left">
                <button className="button button_danger button_small">&times;</button>
                <img className="basket-item__image" src={image} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <div>{price} UZS</div>
                </div>
            </div>
            <div className="basket-item__right">
                <div className="basket-item__control">
                    <button className="button">+</button>
                    <input type="number" />
                    <button className="button">-</button>
                </div>
                <h2>
                    totalPrice UZS
                </h2>
            </div>
        </li>
    )
}

export default BasketItem;