import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    goods: null,
    isLoading: false,
    error: null,
    searchValue: '',
    filteredGoods: {
        products: []
    }
}

const removeGoods = (goods, id) => {
    return goods.filter(good => good.id !== id);
}

export const fetchGoods = createAsyncThunk(
    'goods/fetchGoods',
    async () => {
        const response = await fetch('https://dummyjson.com/products?limit=10&skip=0');
        const data = await response.json();
        return data;
    }
)

export const fetchDeleteGood = createAsyncThunk(
    'goods/fetchDeleteGood',
    async (id) => {
        await fetch('https://dummyjson.com/products/' + id, {
            method: 'DELETE',
        });
        return id;
    }
)

const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        searchGoods: (state, action) => {
            state.searchValue = action.payload;

            if (action.payload) {
                state.filteredGoods.products = state.goods.products.filter((product) => {
                    if (product.title.toLowerCase().includes(action.payload.toLowerCase())) {
                        return true;
                    }
                })
            }
            else {
                state.filteredGoods.products = []
            }
        }
    },
    extraReducers: {
        [fetchGoods.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [fetchGoods.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.goods = action.payload;
        },
        [fetchGoods.rejected]: (state, action) => {
            state.error = true;
        },

        [fetchDeleteGood.fulfilled]: (state, action) => {
            state.filteredGoods.products = removeGoods(state.filteredGoods.products, action.payload);
            state.goods.products = removeGoods(state.goods.products, action.payload);
        }
    },

});

export const { searchGoods } = goodsSlice.actions;
export default goodsSlice.reducer;