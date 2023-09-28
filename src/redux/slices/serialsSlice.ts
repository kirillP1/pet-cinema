import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { headerSliderSlides } from '../../data/headerSliderSlides'

export enum statusLoadingEnum {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

const initialState = {
	items: <any>headerSliderSlides,
	status: statusLoadingEnum.LOADING, // loading | success | error
}

const serialsSlice = createSlice({
	name: 'serials',
	initialState,
	reducers: {
		serialsFetching(state) {
			state.status = statusLoadingEnum.LOADING
		},
		serialsFetchingSuccess(state, action: PayloadAction<any[]>) {
			state.items = action.payload
			state.status = statusLoadingEnum.SUCCESS
		},
		serialsFetchingError(state, action: PayloadAction<string>) {
			console.log('Error serialsSlice:', action.payload)
			state.items = []
			state.status = statusLoadingEnum.ERROR
		},
	},
})

export const { serialsFetching, serialsFetchingSuccess, serialsFetchingError } =
	serialsSlice.actions
export default serialsSlice.reducer
