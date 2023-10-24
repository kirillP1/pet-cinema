import { FC } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import { LinkedMovie, MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { IFilms } from '../../../data/filmsLocalData'
import { useAppSelector } from '../../../hooks/redux'
import RelatedFilmsSlide from './RelatedFilmsSlide'
type typeFilmSingleBanner = {
	film: IFilms | MovieDtoV13
}
const RelatedFilmsSlider: FC<typeFilmSingleBanner> = ({ film }) => {
	const { width } = useAppSelector(state => state.app)
	return (
		<div className='relatedFilmsSlider' id='related'>
			<h2 className='relatedFilmsSlider__header'>Похожее</h2>
			<Swiper
				className='swiper relatedFilmsSlider__container'
				modules={[Navigation, Pagination, Autoplay]}
				pagination={{ clickable: true }}
				speed={2400}
				spaceBetween={25}
				slidesPerView={width > 1024 ? 4 : 1}
				autoplay={{ delay: 3000 }}
			>
				<div className='swiper-wrapper relatedFilmsSlider__wrapper'>
					{film.similarMovies?.map(
						(item: LinkedMovie | IFilms, index: number) => (
							<SwiperSlide
								className='swiper-slide relatedFilmsSlider__item'
								key={index}
							>
								<RelatedFilmsSlide item={item} />
							</SwiperSlide>
						)
					)}
				</div>
			</Swiper>
		</div>
	)
}

export default RelatedFilmsSlider
