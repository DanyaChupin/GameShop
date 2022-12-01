import { createSlice } from '@reduxjs/toolkit'

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    currentGame: null,
  },
  reducers: {
    setCurrentGames: (state, action) => {
      state.currentGame = action.payload
    },
  },
})

export const { setCurrentGames } = gamesSlice.actions
export default gamesSlice.reducer
