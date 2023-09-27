import { FC } from 'react'
// Import Swiper React components

import { Navigation, Parallax } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { franchiseData } from '../../data/franchiseData'

const FranchisesSlider: FC = () => {
	return (
		<section className='franchises-slider' id='goods'>
			<h2 className='franchises-slider__header'>Известные франшизы</h2>
			<Swiper
				className='swiper franchises-slider__container'
				modules={[Navigation, Parallax]}
				navigation
				speed={2400}
				parallax={true}
				spaceBetween={18}
			>
				<div className='swiper-wrapper franchises-slider__wrapper'>
					{franchiseData.map(item => (
						<SwiperSlide className='swiper-slide franchises-slider__item'>
							<div
								className='franchises-slider__layer'
								data-swiper-parallax='55%'
								style={{
									backgroundImage: `url(${item.bg})`,
								}}
							></div>
							<canvas
								className='particles franchises-slider__layer'
								data-swiper-parallax='30%'
								data-color='#BE9164'
							></canvas>
							<div
								className='franchises-slider__layer franchises-slider__text-wrapper'
								data-swiper-parallax='25%'
							>
								<div className='franchises-slider__text'>
									<div className='franchises-slider__title'>{item.title}</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</div>
			</Swiper>
		</section>
	)
}

export default FranchisesSlider
