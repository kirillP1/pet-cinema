import { configureStore } from '@reduxjs/toolkit'

import filmsSlice from './slices/filmsSlice'
import filterSlice from './slices/filterSlice'

export const store = configureStore({
	reducer: {
		films: filmsSlice,
		filter: filterSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
