import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
	IFilter,
	activeSortType,
	sortEnum,
} from '../../@types/filtersInterfaces'
import { statusLoadingEnum } from './serialsSlice'

export interface IFilters {
	genres: IFilter
	years: IFilter
	countries: IFilter
}
export interface ISearch {
	searchValue: string
	searchActive: boolean
	searchData: any[]
	status: statusLoadingEnum
}
interface filtersSliceState {
	search: ISearch
	activeSortType: activeSortType
}

const initialState: filtersSliceState = {
	search: {
		searchValue: '',
		searchActive: false,
		searchData: [{}, {}, {}],
		status: statusLoadingEnum.LOADING,
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

		setSortType: (state, action: PayloadAction<activeSortType>) => {
			state.activeSortType = action.payload
		},

		searchFetching(state) {
			state.search.status = statusLoadingEnum.LOADING
		},
		searchFetchingSuccess(state, action: PayloadAction<any[]>) {
			state.search.searchData = action.payload
			state.search.status = statusLoadingEnum.SUCCESS
		},
		searchFetchingError(state, action: PayloadAction<string>) {
			console.log('Error filmsSlice:', action.payload)
			state.search.searchData = new Array(3)
			state.search.status = statusLoadingEnum.ERROR
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
		setSearchActive: (state, action: PayloadAction<boolean>) => {
			state.search.searchActive = action.payload
		},
	},
})

export const {
	setSortType,
	setSearchValue,
	searchChange,
	searchFetching,
	searchFetchingSuccess,
	searchFetchingError,
	setSearchActive,
} = filtersSlice.actions
export default filtersSlice.reducer
