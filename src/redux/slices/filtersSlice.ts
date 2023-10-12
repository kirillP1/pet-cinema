import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
	IFilter,
	activeSortType,
	sortEnum,
} from '../../@types/filtersInterfaces'

export interface IFilters {
	genres: IFilter
	years: IFilter
	countries: IFilter
}
export interface ISearch {
	searchValue: string
	searchActive: boolean
	searchData: any[]
}
interface filtersSliceState {
	search: ISearch
	filters: IFilters
	activeSortType: activeSortType
}

const initialState: filtersSliceState = {
	search: {
		searchValue: '',
		searchActive: false,
		searchData: [],
	},
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
		sort: sortEnum.RATING,
	},
}

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.search.searchValue = action.payload.toLocaleLowerCase()
		},
		setYear: (state, action: PayloadAction<string>) => {
			state.filters.years.active = action.payload
		},
		setCountry: (state, action: PayloadAction<string>) => {
			state.filters.countries.active = action.payload
		},
		setGenre: (state, action: PayloadAction<string>) => {
			state.filters.genres.active = action.payload
		},
		setSortType: (state, action: PayloadAction<activeSortType>) => {
			state.activeSortType = action.payload
		},
		setGenresAll: (state, action: PayloadAction<string[]>) => {
			state.filters.genres.all = action.payload
		},
		setCountriesAll: (state, action: PayloadAction<string[]>) => {
			state.filters.countries.all = action.payload
		},
		setYearsAll: (state, action: PayloadAction<string[]>) => {
			state.filters.years.all = action.payload
		},
		setSearchData: (state, action: PayloadAction<any[]>) => {
			state.search.searchData = action.payload
		},
		searchChange: (state, action: PayloadAction<string>) => {
			state.search.searchValue = action.payload
			if (state.search.searchValue.length > 0) {
				state.search.searchActive = true
			} else {
				state.search.searchActive = false
			}
			console.log(state.search.searchValue, state.search.searchActive)
		},
	},
})

export const {
	setYear,
	setCountry,
	setGenre,
	setSortType,
	setGenresAll,
	setCountriesAll,
	setYearsAll,
	setSearchValue,
	searchChange,
	setSearchData,
} = filtersSlice.actions
export default filtersSlice.reducer
