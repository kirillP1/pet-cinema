import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { statusLoadingEnum } from '../../../@types/enums/statusLoadingEnum'
import { filmsLocalData } from '../../../data/filmsLocalData'
interface IMiniSlider {
	items: any[]
	status: statusLoadingEnum
}
interface IBannerSlider {
	activeSlide: number
	countSlide: number
	scrollTop: number
	itemsData: any[]
}
const initialState = {
	banner: <IBannerSlider>{
		activeSlide: 1,
		countSlide: 1,
		scrollTop: 0,
		itemsData: filmsLocalData.slice(0, 5),
	},
	popular: <IMiniSlider>{
		items: Array(5),
		status: statusLoadingEnum.LOADING,
	},
	oscar: <IMiniSlider>{
		items: Array(5),
		status: statusLoadingEnum.LOADING,
	},
	adaptation: <IMiniSlider>{
		items: Array(5),
		status: statusLoadingEnum.LOADING,
	},
	music: <IMiniSlider>{
		items: Array(5),
		status: statusLoadingEnum.LOADING,
	},
}

const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		setActiveSlide: (state, action: PayloadAction<number>) => {
			state.banner.activeSlide = action.payload
		},
		setCountSlide: (state, action: PayloadAction<number>) => {
			state.banner.countSlide = action.payload
		},
		setScrollTop: (state, action: PayloadAction<number>) => {
			state.banner.scrollTop = action.payload
		},
		setItemsData: (state, action: PayloadAction<any[]>) => {
			state.banner.itemsData = action.payload
		},
	},
})

export const { setActiveSlide, setCountSlide, setScrollTop, setItemsData } =
	homeSlice.actions
export default homeSlice.reducer
