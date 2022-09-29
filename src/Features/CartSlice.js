import { createSlice } from '@reduxjs/toolkit';
const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addTocart: (state, action) => {
            const event = (item) => item.id === action.payload.id;
            if (!state.some(event)) {
                action.payload.qty = 1;
                state.push(action.payload);
            } else {
                const newCart = state;
                const objIndex = newCart.findIndex((item) => item.id === action.payload.id);
                newCart[objIndex].qty += 1;
                state = [...newCart];
            }
        },
        removeFromCart: (state, action) => {
            const objIndex = state.findIndex((item) => item.id === action.payload.id);
            state.splice(objIndex, 1);
        },
        reduceAmountCart: (state, action) => {
            const updateCart = state;
            const objIndex = updateCart.findIndex((item) => item.id === action.payload.id);
            if (updateCart[objIndex].qty > 1) {
                updateCart[objIndex].qty -= 1;
                state = [...updateCart];
            } else {
                updateCart.splice(objIndex, 1);
                state = [...updateCart];
            }
        },
    },
});
const { reducer, actions } = CartSlice;
export const { addTocart, removeFromCart, reduceAmountCart } = actions;
export default reducer;
