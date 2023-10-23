import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IFilms } from '../../../data/filmsLocalData'

export enum statusLoadingEnum {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

const initialState = {
	items: Array(12),
	activeSerial: {} as IFilms | MovieDtoV13,
	status: statusLoadingEnum.LOADING, // loading | success | error
}

const serialsSlice = createSlice({
	name: 'serials',
	initialState,
	reducers: {
		serialsFetching(state) {
			state.status = statusLoadingEnum.LOADING
		},
		serialsFetchingSuccess(
			state,
			action: PayloadAction<IFilms[] | MovieDtoV13[]>
		) {
			state.items = action.payload
			state.status = statusLoadingEnum.SUCCESS
		},
		serialsFetchingError(state, action: PayloadAction<string>) {
			console.log('Error serialsSlice:', action.payload)
			state.items = []
			state.status = statusLoadingEnum.ERROR
		},
		setActiveSerial(state, action: PayloadAction<IFilms | MovieDtoV13>) {
			if (action.payload) {
				state.activeSerial = action.payload
			} else {
				console.log('Ошибка setActiveSerial')
			}
		},
	},
})

export const {
	serialsFetching,
	serialsFetchingSuccess,
	serialsFetchingError,
	setActiveSerial,
} = serialsSlice.actions
export default serialsSlice.reducer
