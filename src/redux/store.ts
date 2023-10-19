import { configureStore } from '@reduxjs/toolkit'

import favoritesSlice from './slices/favorites/favoritesSlice'
import filmFiltersSlice from './slices/filmFilters/filmFiltersSlice'
import filmsSlice from './slices/films/filmsSlice'
import filtersSlice from './slices/filters/filtersSlice'
import homeSlice from './slices/home/homeSlice'
import serialFiltersSlice from './slices/serialFilters/serialFiltersSlice'
import serialsSlice from './slices/serials/serialsSlice'
import singleFilmSlice from './slices/singleFilm/singleFilmSlice'
import singleSerialSlice from './slices/singleSerial/singleSerialSlice'

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
