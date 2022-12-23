import { createSlice } from '@reduxjs/toolkit'

const gamesFiltering = createSlice({
  name: 'gamesFiltering',
  initialState: {
    currentGameFilter: null,
  },
  reducers: {
    setCurrentGamesFilter: (state, action) => {
      state.currentGameFilter = action.payload
    },
  },
})

export const { setCurrentGamesFilter } = gamesFiltering.actions
export default gamesFiltering.reducer
