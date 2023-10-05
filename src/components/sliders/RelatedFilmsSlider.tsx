import { FC } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IFilms } from '../../data/filmsLocalData'
// Import Swiper styles
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
type typeFilmSingleBanner = {
	film: IFilms
}
const RelatedFilmsSlider: FC<typeFilmSingleBanner> = ({ film }) => {
	console.log(film.similarMovies)

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
					{film.similarMovies?.map((item, index) => (
						<SwiperSlide
							className='swiper-slide relatedFilmsSlider__item'
							key={index}
						>
							<div
								className='relatedFilmsSlider__layer'
								style={{
									backgroundImage: `url(${item.poster.url})`,
								}}
							></div>
							<canvas
								className='particles relatedFilmsSlider__layer'
								data-color='#BE9164'
							></canvas>
							<Link
								to={'/films/' + item.id}
								className='relatedFilmsSlider__layer relatedFilmsSlider__text-wrapper'
							>
								<div className='relatedFilmsSlider__text'>
									<div className='relatedFilmsSlider__title'>{item.name}</div>
								</div>
							</Link>
						</SwiperSlide>
					))}
				</div>
			</Swiper>
		</div>
	)
}

export default RelatedFilmsSlider
