import { PayloadAction, createSlice } from '@reduxjs/toolkit'
type typeAppSlice = {
	width: number
}
const initialState: typeAppSlice = {
	width: 0,
}

const appSlice = createSlice({
	name: 'appSlice',
	initialState,
	reducers: {
		resize: (state, action: PayloadAction<number>) => {
			state.width = action.payload
		},
	},
})

export const { resize } = appSlice.actions
export default appSlice.reducer
