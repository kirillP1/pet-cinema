import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { statusLoadingEnum } from '../../../@types/enums/statusLoadingEnum'
import { IFilms } from '../../../data/filmsLocalData'

const initialState = {
	serial: {} as IFilms | MovieDtoV13 | null,
	status: statusLoadingEnum.LOADING, // loading | success | error
}

const singleSerialSlice = createSlice({
	name: 'singleSerial',
	initialState,
	reducers: {
		singleSerialFetching(state) {
			state.status = statusLoadingEnum.LOADING
		},
		singleSerialFetchingSuccess(
			state,
			action: PayloadAction<IFilms | MovieDtoV13>
		) {
			state.serial = action.payload
			state.status = statusLoadingEnum.SUCCESS
		},
		singleSerialFetchingError(state, action: PayloadAction<string>) {
			state.serial = null
			state.status = statusLoadingEnum.ERROR
		},
	},
})

export const {
	singleSerialFetching,
	singleSerialFetchingSuccess,
	singleSerialFetchingError,
} = singleSerialSlice.actions
export default singleSerialSlice.reducer
