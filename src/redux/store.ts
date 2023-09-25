import { configureStore } from '@reduxjs/toolkit'

import filterSlice from './slices/filterSlice'
import kinopoiskSlice from './slices/kinopoiskSlice'

export const store = configureStore({
	reducer: {
		kinopoisk: kinopoiskSlice,
		filter: filterSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
