import { FC } from 'react'
// Import Swiper React components

import { Navigation, Parallax } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { franchiseData } from '../../../data/franchiseData'
import FranchiseSlide from './FranchiseSlide'

const FranchisesSlider: FC = () => {
	return (
		<section className='franchises-slider' id='goods'>
			<h2 className='franchises-slider__title'>Известные франшизы</h2>
			<Swiper
				className='swiper franchises-slider__container'
				modules={[Navigation, Parallax]}
				navigation
				speed={2400}
				parallax={true}
				spaceBetween={18}
			>
				<div className='swiper-wrapper franchises-slider__wrapper'>
					{franchiseData.map((item, index: number) => (
						<SwiperSlide
							className='swiper-slide franchises-slider__item'
							key={index}
						>
							<FranchiseSlide item={item} />
						</SwiperSlide>
					))}
				</div>
			</Swiper>
		</section>
	)
}

export default FranchisesSlider
