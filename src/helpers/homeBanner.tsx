import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import { IFilms } from '../data/filmsLocalData'
import { setActiveSlide } from '../redux/slices/home/homeSlice'
import { AppDispatch } from '../redux/store'

export const updateActiveSlide = (
	countSlide: number,
	itemsData: IFilms[] | MovieDtoV13[],
	dispatch: AppDispatch
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

export const scrollListener = (dispatch: AppDispatch, setScrollTop: any) => {
	window.addEventListener('scroll', e => {
		dispatch(setScrollTop(window.scrollY))
	})
}
