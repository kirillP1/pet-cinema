import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { statusLoadingEnum } from '../../../@types/enums/statusLoadingEnum'
import { IFilms } from '../../../data/filmsLocalData'

const initialState = {
	film: {} as IFilms | MovieDtoV13 | null,
	status: statusLoadingEnum.LOADING, // loading | success | error
}

const singleFilmSlice = createSlice({
	name: 'singleFilm',
	initialState,
	reducers: {
		singleFilmFetching(state) {
			state.status = statusLoadingEnum.LOADING
		},
		singleFilmFetchingSuccess(
			state,
			action: PayloadAction<IFilms | MovieDtoV13>
		) {
			state.film = action.payload
			state.status = statusLoadingEnum.SUCCESS
		},
		singleFilmFetchingError(state, action: PayloadAction<string>) {
			console.log('Error filmsSlice:', action.payload)
			state.film = null
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
