import { useDispatch } from 'react-redux';
import ProductItem from './../ProductItem/ProductItem';
import { addPToBasket, setTotalQuantity } from './../../redux/basketSlice';

const Products = ({ products }) => {
    const dispatch = useDispatch();

    const addProductToBasket = (product) => {
        dispatch(addPToBasket({ product }))
        dispatch(setTotalQuantity())
    }

    return (
        <section className="products">
            <div className="container">
                <div className="products__items">
                    {products.map(product => {
                        return <ProductItem
                            key={product.id}
                            {...product}
                            onClick={() => addProductToBasket(product)}
                        />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Products;