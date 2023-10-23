import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { statusLoadingEnum } from '../../../@types/enums/statusLoadingEnum'
import { IFilms, filmsLocalData } from '../../../data/filmsLocalData'

const initialState = {
	items: filmsLocalData as IFilms[] | MovieDtoV13[],
	activeFilm: {} as IFilms | MovieDtoV13,
	status: statusLoadingEnum.LOADING, // loading | success | error
}

const filmsSlice = createSlice({
	name: 'films',
	initialState,
	reducers: {
		filmsFetching(state) {
			state.status = statusLoadingEnum.LOADING
		},
		filmsFetchingSuccess(
			state,
			action: PayloadAction<IFilms[] | MovieDtoV13[]>
		) {
			state.items = action.payload
			state.status = statusLoadingEnum.SUCCESS
		},
		filmsFetchingError(state, action: PayloadAction<string>) {
			console.log('Error filmsSlice:', action.payload)
			state.items = []
			state.status = statusLoadingEnum.ERROR
		},
		setActiveFilm(state, action: PayloadAction<IFilms | MovieDtoV13>) {
			if (action.payload) {
				state.activeFilm = action.payload
			} else {
				console.log('Ошибка setActiveFilm')
			}
		},
	},
})

export const {
	filmsFetching,
	filmsFetchingSuccess,
	filmsFetchingError,
	setActiveFilm,
} = filmsSlice.actions
export default filmsSlice.reducer
