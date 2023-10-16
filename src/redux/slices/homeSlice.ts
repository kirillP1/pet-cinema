import { createSlice } from '@reduxjs/toolkit'
import { statusLoadingEnum } from '../../@types/enums/statusLoadingEnum'
interface IMiniSlider {
	items: any[]
	status: statusLoadingEnum
}
interface IMiniSliders {
	popular: IMiniSlider
	oscar: IMiniSlider
	adaptation: IMiniSlider
	music: IMiniSlider
}
const initialState: IMiniSliders = {
	popular: {
		items: Array(5) as any[],
		status: statusLoadingEnum.LOADING,
	},
	oscar: {
		items: Array(5) as any[],
		status: statusLoadingEnum.LOADING,
	},
	adaptation: {
		items: Array(5) as any[],
		status: statusLoadingEnum.LOADING,
	},
	music: {
		items: Array(5) as any[],
		status: statusLoadingEnum.LOADING,
	},
}

const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {},
})

export const {} = homeSlice.actions
export default homeSlice.reducer
