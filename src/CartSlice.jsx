import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  totalQuantity: 0, // Track total quantity
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
      state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);

    }
    ,
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
      state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);

    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
      state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;