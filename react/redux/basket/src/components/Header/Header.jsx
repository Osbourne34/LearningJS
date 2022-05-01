import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const quantityOfProductsAdded = useSelector(state => state.basket.totalQuantity);

    return (
        <header className="header">
            <div className="container">
                <NavLink to='/'>Shop</NavLink>
                <NavLink to='/basket'>Basket : {quantityOfProductsAdded}</NavLink>
            </div>
        </header>
    )
}

export default Header;

