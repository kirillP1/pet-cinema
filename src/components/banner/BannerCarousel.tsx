import React, { FC, useMemo } from 'react'
import Slider from 'react-slick'
import { IFilms } from '../../data/filmsLocalData'
import { homeSliderSettings } from '../../data/sliderSettings'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setCountSlide } from '../../redux/slices/home/homeSlice'
import BannerCarouselCard from '../cards/BannerCarouselCard'
const BannerCarousel: FC = () => {
	const dispatch = useAppDispatch()
	let { countSlide, itemsData } = useAppSelector(state => state.home.banner)
	itemsData = useMemo(() => itemsData, [])
	var settings = homeSliderSettings(countSlide, dispatch(setCountSlide))

	return (
		<div className='carousel'>
			<Slider {...settings}>
				{itemsData.map((item: IFilms, index: number) => (
					<BannerCarouselCard item={item} />
				))}
			</Slider>
		</div>
	)
}

export default React.memo(BannerCarousel)
