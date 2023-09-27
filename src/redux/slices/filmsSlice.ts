import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export enum statusLoadingEnum {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

const initialState = {
	items: <any>[],
	status: statusLoadingEnum.LOADING, // loading | success | error
}

const filmsSlice = createSlice({
	name: 'films',
	initialState,
	reducers: {
		filmsFetching(state) {
			state.status = statusLoadingEnum.LOADING
		},
		filmsFetchingSuccess(state, action: PayloadAction<any[]>) {
			state.items = action.payload
			state.status = statusLoadingEnum.SUCCESS
		},
		filmsFetchingError(state, action: PayloadAction<string>) {
			console.log('Error:', action.payload)

			state.items = []
			state.status = statusLoadingEnum.ERROR
		},
	},
})

export const { filmsFetching, filmsFetchingSuccess, filmsFetchingError } =
	filmsSlice.actions
export default filmsSlice.reducer
