import { useDispatch } from "react-redux";
import { decreaseProductFromBasket, removeProductFromBasket } from './../../redux/basketSlice';

const BasketItem = ({ name, price, image, quantity, id, onAdd }) => {
    const dispatch = useDispatch()

    const onDecreaseProductFromBasket = (id) => {
        dispatch(decreaseProductFromBasket(id))
    }

    const onRemoveProductFromBasket = (id) => {
        dispatch(removeProductFromBasket(id))
    }

    return (
        <li className="basket-item">
            <div className="basket-item__left">
                <button
                    className="button button_danger button_small"
                    onClick={() => onRemoveProductFromBasket(id)}
                >
                    &times;
                </button>
                <img className="basket-item__image" src={image} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <div>{new Intl.NumberFormat('ru-RU').format(price)} UZS</div>
                </div>
            </div>
            <div className="basket-item__right">
                <div className="basket-item__control">
                    <button
                        className="button"
                        onClick={onAdd}
                    >
                        +
                    </button>
                    <div>{quantity}</div>
                    <button
                        className="button"
                        onClick={() => onDecreaseProductFromBasket(id)}
                    >
                        -
                    </button>
                </div>
                <h2>
                    {new Intl.NumberFormat('ru-RU').format(price * quantity)} UZS
                </h2>
            </div>
        </li>
    )
}

export default BasketItem;