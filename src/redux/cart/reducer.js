import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload)
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        game => game.id !== action.payload
      )
    },
    cleanAllCart: state => {
      state.itemsInCart = []
    },
  },
})

export const { setItemInCart, deleteItemFromCart, cleanAllCart } =
  cartSlice.actions
export default cartSlice.reducer
