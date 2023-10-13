import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
	IFilter,
	activeSortType,
	sortEnum,
} from '../../@types/filtersInterfaces'

export interface IFilmFilters {
	genres: IFilter
	years: IFilter
	countries: IFilter
}

interface filmFiltersSliceState {
	filters: IFilmFilters
	activeSortType: activeSortType
	pagination: number
}

const initialState: filmFiltersSliceState = {
	filters: {
		genres: {
			title: 'Жанры',
			active: 'Все жанры',
			all: [
				'Все жанры',
				'Аниме',
				'Биография',
				'Боевик',
				'Вестерн',
				'Военный',
				'Ужасы',
				'Комедия',
			],
		},
		years: {
			title: 'Годы',
			active: 'Все годы',
			all: [
				'Все годы',
				'2020-2023',
				'2010-2019',
				'2000-2009',
				'1990-1999',
				'1980-1989',
				'1970-1989',
				'1960-1969',
				'1950-1959',
				'1940-1949',
				'1930-1939',
				'1920-1929',
				'1910-1919',
				'1900-1909',
			],
		},
		countries: {
			title: 'Страны',
			active: 'Все страны',
			all: ['Все страны', 'Россия', 'СССР', 'США', 'Франция', 'Италия'],
		},
	},
	activeSortType: {
		sortName: 'По популярности',
		sort: sortEnum.POPULARITY,
	},
	pagination: 1,
}

const filmFiltersSlice = createSlice({
	name: 'filmFilters',
	initialState,
	reducers: {
		setFilmYear: (state, action: PayloadAction<string>) => {
			state.filters.years.active = action.payload
		},
		setFilmCountry: (state, action: PayloadAction<string>) => {
			state.filters.countries.active = action.payload
		},
		setFilmGenre: (state, action: PayloadAction<string>) => {
			state.filters.genres.active = action.payload
		},
		setFilmSortType: (state, action: PayloadAction<activeSortType>) => {
			state.activeSortType = action.payload
		},
		setFilmGenresAll: (state, action: PayloadAction<string[]>) => {
			state.filters.genres.all = action.payload
		},
		setFilmCountriesAll: (state, action: PayloadAction<string[]>) => {
			state.filters.countries.all = action.payload
		},
		setFilmPagination: (state, action: PayloadAction<number>) => {
			state.pagination = action.payload
		},
	},
})

export const {
	setFilmYear,
	setFilmCountry,
	setFilmGenre,
	setFilmSortType,
	setFilmGenresAll,
	setFilmCountriesAll,
	setFilmPagination,
} = filmFiltersSlice.actions
export default filmFiltersSlice.reducer
