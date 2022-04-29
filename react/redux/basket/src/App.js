import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Basket from './components/Basket/Basket';

import { products } from './assets/products/productsDB';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Products products={products} />} />
                <Route path="/basket" element={<Basket />} />
            </Routes>
        </>
    )
}

export default App;
