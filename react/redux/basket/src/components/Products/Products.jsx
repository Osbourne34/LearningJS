import { useDispatch } from 'react-redux';
import { addProductToBasket } from './../../redux/basketSlice';
import ProductItem from './../ProductItem/ProductItem';

const Products = ({ products }) => {
    const dispatch = useDispatch();

    const onAddToBasket = (product) => {
        dispatch(addProductToBasket(product))
    }

    return (
        <section className="products">
            <div className="container">
                <div className="products__items">
                    {products.map(product => {
                        return <ProductItem
                            key={product.id}
                            {...product}
                            onAddToBasket={() => onAddToBasket(product)}
                        />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Products;