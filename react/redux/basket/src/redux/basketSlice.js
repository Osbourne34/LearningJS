import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basket: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addPToBasket(state, action) {
            if(action.payload.product.quantity === 1) {
                state.basket.push(action.payload.product);
            } else {
                const product = state.basket.find(item => item.id === action.payload.product.id);
                
            }
        },
        setTotalQuantity(state, action) {
            state.totalQuantity = state.basket.length;
        }
    }
})

export const { addPToBasket, setTotalQuantity } = basketSlice.actions;
export default basketSlice.reducer;