import { configureStore } from '@reduxjs/toolkit'

import filmFiltersSlice from './slices/filmFiltersSlice'
import filmsSlice from './slices/filmsSlice'
import filtersSlice from './slices/filtersSlice'
import serialFiltersSlice from './slices/serialFiltersSlice'
import serialsSlice from './slices/serialsSlice'

export const store = configureStore({
	reducer: {
		filters: filtersSlice,
		films: filmsSlice,
		filmFilters: filmFiltersSlice,
		serials: serialsSlice,
		serialFilters: serialFiltersSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
