import BasketItem from "../BasketItem/BasketItem";
import { useSelector } from "react-redux";

const Basket = () => {
    const basket = useSelector(state => state.basket.basket);

    return (
        <div className="basket">
            <div className="container">
                <h1>Basket</h1>

                {basket.length ?
                    <ul className="basket__list">
                        {basket.map(product => {
                            return <BasketItem key={product.id} {...product} />
                        })}
                    </ul> 
                    :
                    <h2>Корзина пуста</h2>
                }

            </div>
        </div>
    )
}

export default Basket;