import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { statusLoadingEnum } from '../../@types/enums/statusLoadingEnum'

const initialState = {
	film: '' as any,
	status: statusLoadingEnum.LOADING, // loading | success | error
}

const singleFilmSlice = createSlice({
	name: 'singleFilm',
	initialState,
	reducers: {
		singleFilmFetching(state) {
			state.status = statusLoadingEnum.LOADING
		},
		singleFilmFetchingSuccess(state, action: PayloadAction<any>) {
			state.film = action.payload
			state.status = statusLoadingEnum.SUCCESS
		},
		singleFilmFetchingError(state, action: PayloadAction<string>) {
			console.log('Error filmsSlice:', action.payload)
			state.film = []
			state.status = statusLoadingEnum.ERROR
		},
	},
})

export const {
	singleFilmFetching,
	singleFilmFetchingSuccess,
	singleFilmFetchingError,
} = singleFilmSlice.actions
export default singleFilmSlice.reducer
