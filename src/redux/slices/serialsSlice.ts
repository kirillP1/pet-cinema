import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export enum statusLoadingEnum {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

const initialState = {
	items: [] as any,
	activeSerial: [] as any,
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
		setActiveSerial(state, action: PayloadAction<any>) {
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
