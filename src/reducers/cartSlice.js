import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // Vanila(Older) Redux - Don't mutate state
            // const newState = [...state];
            // newState.ites.push(action.payload);
            // return newState // mandatory

            // Redux Toolkit uses immer js behind the scene
            // We have to mutate the state or return a new state
            // mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0; //state=[]
            // return {items:[]}
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;