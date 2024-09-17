import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                // If item is already in the cart, increment its quantity
                state.cart[itemIndex].quantity += 1;
            } else {
                // If the item is not in the cart, add it with quantity 1
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeCart: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload);
            if (itemIndex >= 0) {
                // Decrease quantity if greater than 1, otherwise remove the item
                if (state.cart[itemIndex].quantity > 1) {
                    state.cart[itemIndex].quantity -= 1;
                } else {
                    state.cart.splice(itemIndex, 1);
                }
            }
        },
    }
});

export const { addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
