import { useEffect } from 'react'
import { updateActiveSlide } from '../../helpers/homeBanner'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchFilms } from '../../redux/slices/films/filmsActionsCreators'
import { setScrollTop } from '../../redux/slices/home/homeSlice'
import { statusLoadingEnum } from '../../redux/slices/serials/serialsSlice'
import BannerPreloader from '../preloaders/BannerPreloader'
import BannerBackground from './BannerBackground'
import BannerCarousel from './BannerCarousel'
import BannerHomeContent from './BannerHomeContent'

const Banner = () => {
	const dispatch = useAppDispatch()

	const { countSlide, itemsData, activeSlide } = useAppSelector(
		state => state.home.banner
	)
	const { status } = useAppSelector(state => state.films)

	/*if (items.length !== 0) {
		console.log('items', items.slice(0, 5))
		//dispatch(setItemsData(items.slice(0, 5)))
	}*/

	useEffect(() => {
		dispatch(fetchFilms())

		window.addEventListener('scroll', e => {
			dispatch(setScrollTop(window.scrollY))
		})
	}, [])

	useEffect(() => {
		updateActiveSlide(countSlide, itemsData, dispatch)
	}, [countSlide])

	console.log('Banner')

	if (status === statusLoadingEnum.LOADING || itemsData.length === 0) {
		return <BannerPreloader />
	} else {
		return (
			<div className='banner'>
				<BannerBackground film={itemsData[activeSlide]} />
				<BannerHomeContent />
				<BannerCarousel />
			</div>
		)
	}
}
export default Banner
