import { useEffect } from 'react'
import {
	scrollListener,
	updateActiveSlide,
} from '../../helpers/homeBanner/homeBanner'
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

	const { countSlide, itemsData, activeSlide, scrollTop } = useAppSelector(
		state => state.home.banner
	)
	const { status } = useAppSelector(state => state.films)

	useEffect(() => {
		dispatch(fetchFilms())
		scrollListener(dispatch, setScrollTop)
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
				<div
					className='carousel-box banner__element'
					style={{
						transform: `translate3d(0, calc((${scrollTop}px) / 7.7), 0)`,
					}}
				>
					<BannerCarousel />
				</div>
			</div>
		)
	}
}
export default Banner
