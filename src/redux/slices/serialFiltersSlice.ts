import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
	IFilter,
	activeSortType,
	sortEnum,
} from '../../@types/filtersInterfaces'

export interface ISerialFilters {
	genres: IFilter
	years: IFilter
	countries: IFilter
}

interface serialFiltersSliceState {
	filters: ISerialFilters
	activeSortType: activeSortType
	pagination: number
}

const initialState: serialFiltersSliceState = {
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

const serialFiltersSlice = createSlice({
	name: 'serialFilters',
	initialState,
	reducers: {
		setSerialYear: (state, action: PayloadAction<string>) => {
			state.filters.years.active = action.payload
		},
		setSerialCountry: (state, action: PayloadAction<string>) => {
			console.log('Set serial country')

			state.filters.countries.active = action.payload
		},
		setSerialGenre: (state, action: PayloadAction<string>) => {
			state.filters.genres.active = action.payload
		},
		setSerialSortType: (state, action: PayloadAction<activeSortType>) => {
			state.activeSortType = action.payload
		},
		setSerialGenresAll: (state, action: PayloadAction<string[]>) => {
			state.filters.genres.all = action.payload
		},
		setSerialCountriesAll: (state, action: PayloadAction<string[]>) => {
			state.filters.countries.all = action.payload
		},
		setSerialPagination: (state, action: PayloadAction<number>) => {
			state.pagination = action.payload
		},
	},
})

export const {
	setSerialYear,
	setSerialCountry,
	setSerialGenre,
	setSerialSortType,
	setSerialGenresAll,
	setSerialCountriesAll,
	setSerialPagination,
} = serialFiltersSlice.actions
export default serialFiltersSlice.reducer
