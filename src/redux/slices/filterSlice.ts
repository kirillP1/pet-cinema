import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export enum sortEnum {
	RATING = 'rating',
	PRICE = 'price',
	NAME = 'name',
}

export type activeSortType = {
	sortName: string
	sort: sortEnum
}

interface filterSliceState {
	year: string
	country: string
	genre: string
	activeSortType: activeSortType
}

const initialState: filterSliceState = {
	year: 'Все годы',
	country: '',
	genre: '',
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
			state.year = action.payload
		},
		setCountry: (state, action: PayloadAction<string>) => {
			state.country = action.payload
		},
		setGenre: (state, action: PayloadAction<string>) => {
			state.genre = action.payload
		},
		setSortType: (state, action: PayloadAction<activeSortType>) => {
			state.activeSortType = action.payload
		},
	},
})

export const { setYear, setCountry, setGenre, setSortType } =
	filterSlice.actions
export default filterSlice.reducer
