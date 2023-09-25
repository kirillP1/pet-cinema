import { configureStore } from '@reduxjs/toolkit'

import kinopoiskSlice from './slices/kinopoiskSlice'

export const store = configureStore({
	reducer: {
		kinopoisk: kinopoiskSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
