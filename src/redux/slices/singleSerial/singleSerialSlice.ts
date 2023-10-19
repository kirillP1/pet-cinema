import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { statusLoadingEnum } from '../../../@types/enums/statusLoadingEnum'

const initialState = {
	serial: '' as any,
	status: statusLoadingEnum.LOADING, // loading | success | error
}

const singleSerialSlice = createSlice({
	name: 'singleSerial',
	initialState,
	reducers: {
		singleSerialFetching(state) {
			state.status = statusLoadingEnum.LOADING
		},
		singleSerialFetchingSuccess(state, action: PayloadAction<any>) {
			state.serial = action.payload
			state.status = statusLoadingEnum.SUCCESS
		},
		singleSerialFetchingError(state, action: PayloadAction<string>) {
			state.serial = []
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
