import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export enum sortEnum {
	RATING = 'rating',
	NAME = 'name',
}

export interface activeSortType {
	sortName: string
	sort: sortEnum
}

export interface IFilter {
	title: string
	active: string
	all: string[]
}
export interface IFilters {
	genres: IFilter
	years: IFilter
	countries: IFilter
}
interface filterSliceState {
	filters: IFilters
	activeSortType: activeSortType
}

const initialState: filterSliceState = {
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

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
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
} = filterSlice.actions
export default filterSlice.reducer
