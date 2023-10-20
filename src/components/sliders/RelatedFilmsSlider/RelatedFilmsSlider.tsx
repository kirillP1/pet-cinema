import { FC } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import RelatedFilmsSlide from './RelatedFilmsSlide'
type typeFilmSingleBanner = {
	film: any
}
const RelatedFilmsSlider: FC<typeFilmSingleBanner> = ({ film }) => {
	return (
		<div className='relatedFilmsSlider' id='related'>
			<h2 className='relatedFilmsSlider__header'>Похожее</h2>
			<Swiper
				className='swiper relatedFilmsSlider__container'
				modules={[Navigation, Pagination, Autoplay]}
				pagination={{ clickable: true }}
				speed={2400}
				spaceBetween={25}
				slidesPerView={4}
				autoplay={{ delay: 3000 }}
			>
				<div className='swiper-wrapper relatedFilmsSlider__wrapper'>
					{film.similarMovies?.map((item: any, index: number) => (
						<SwiperSlide className='swiper-slide relatedFilmsSlider__item'>
							<RelatedFilmsSlide item={item} key={index} />
						</SwiperSlide>
					))}
				</div>
			</Swiper>
		</div>
	)
}

export default RelatedFilmsSlider
