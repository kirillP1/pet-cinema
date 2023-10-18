import { configureStore } from '@reduxjs/toolkit'

import favoritesSlice from './slices/favoritesSlice'
import filmFiltersSlice from './slices/filmFiltersSlice'
import filmsSlice from './slices/filmsSlice'
import filtersSlice from './slices/filtersSlice'
import homeSlice from './slices/homeSlice'
import serialFiltersSlice from './slices/serialFiltersSlice'
import serialsSlice from './slices/serialsSlice'
import singleFilmSlice from './slices/singleFilmSlice'
import singleSerialSlice from './slices/singleSerialSlice'

export const store = configureStore({
	reducer: {
		filters: filtersSlice,
		films: filmsSlice,
		filmFilters: filmFiltersSlice,
		serials: serialsSlice,
		serialFilters: serialFiltersSlice,
		favorites: favoritesSlice,
		home: homeSlice,
		singleFilm: singleFilmSlice,
		singleSerial: singleSerialSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
