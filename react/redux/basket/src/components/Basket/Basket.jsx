import { useSelector, useDispatch } from "react-redux";
import { addProductToBasket } from './../../redux/basketSlice';
import BasketItem from "../BasketItem/BasketItem";

const Basket = () => {
    const basket = useSelector(state => state.basket.basket);
    const totalPrice = useSelector(state => state.basket.totalPrice);
    const dispatch = useDispatch();

    const onAddToBasket = (product) => {
        dispatch(addProductToBasket(product))
    }

    return (
        <div className="basket">
            <div className="container">
                <h1>Basket</h1>

                {basket.length ?
                    <ul className="basket__list">
                        {basket.map(product => {
                            return <BasketItem
                                key={product.id}
                                {...product}
                                onAdd={() => onAddToBasket(product)}
                            />
                        })}
                    </ul>
                    :
                    <h2>Корзина пуста</h2>
                }
                {totalPrice > 0 &&
                    <h2 className="basket__total-price">{new Intl.NumberFormat('ru-RU').format(totalPrice)} UZS</h2>
                }
            </div>
        </div>
    )
}

export default Basket;