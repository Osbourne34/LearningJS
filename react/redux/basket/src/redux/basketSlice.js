import { createSlice } from '@reduxjs/toolkit';

const setTotalQuantity = (basket) => {
    if (basket.length) {
        return basket.map(item => {
            return item.quantity;
        }).reduce((start, curr) => {
            return start + curr;
        })
    } else {
        return 0;
    }
}
const setTotalPrice = (basket) => {
    if (basket.length) {
        return basket.map((item) => {
            return item.quantity * item.price;
        }).reduce((start, curr) => {
            return start + curr;
        })
    } else {
        return 0;
    }
}

const removeProduct = (id, basket) => {
    return basket.filter(item => item.id !== id);
}

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basket: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addProductToBasket(state, action) {
            const product = action.payload;
            const isThisProductInBasket = state.basket.some(item => item.id === product.id);
            if (isThisProductInBasket) {
                const currentProduct = state.basket.find(item => item.id === product.id);
                currentProduct.quantity += 1;
            } else {
                state.basket.push(product);
            }

            state.totalQuantity = setTotalQuantity(state.basket);
            state.totalPrice = setTotalPrice(state.basket);
        },
        decreaseProductFromBasket(state, action) {
            const id = action.payload;
            const product = state.basket.find(item => item.id === id);

            if (product.quantity === 1) {
                state.basket = removeProduct(id, state.basket);
            } else {
                product.quantity -= 1;
            }

            state.totalQuantity = setTotalQuantity(state.basket);
            state.totalPrice = setTotalPrice(state.basket);
        },
        removeProductFromBasket(state, action) {
            const id = action.payload;
            state.basket = removeProduct(id, state.basket);
            
            state.totalQuantity = setTotalQuantity(state.basket);
            state.totalPrice = setTotalPrice(state.basket);
        }
    }
})

export const { addProductToBasket, decreaseProductFromBasket, removeProductFromBasket } = basketSlice.actions;
export default basketSlice.reducer;