import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { IFilms } from '../../data/filmsLocalData'
import { homeSliderSettings } from '../../data/sliderSettings'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setCountSlide } from '../../redux/slices/home/homeSlice'
const BannerCarousel = () => {
	const dispatch = useAppDispatch()
	const { countSlide, scrollTop, itemsData } = useAppSelector(
		state => state.home.banner
	)
	var settings = homeSliderSettings(countSlide, dispatch(setCountSlide))

	return (
		<div
			className='carousel-box banner__element'
			style={{
				transform: `translate3d(0, calc((${scrollTop}px) / 7.7), 0)`,
			}}
		>
			<div className='carousel'>
				<Slider {...settings}>
					{itemsData.map((item: IFilms, index: number) => (
						<div key={index} className='carousel-item'>
							<Link to={'/films/' + item.id}>
								<img src={item.poster.url} alt='' />
							</Link>
						</div>
					))}
				</Slider>
			</div>
		</div>
	)
}

export default BannerCarousel
