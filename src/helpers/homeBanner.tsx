import { setActiveSlide } from '../redux/slices/home/homeSlice'

export const updateActiveSlide = (
	countSlide: number,
	itemsData: any,
	dispatch: any
) => {
	let c: number

	if (countSlide % itemsData.length === 0) {
		c = itemsData.length
		console.log(c)
	} else {
		c = countSlide % itemsData.length
	}
	dispatch(setActiveSlide(c - 1))
}
