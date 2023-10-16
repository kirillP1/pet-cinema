import { FC, useState } from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import MiniSliderCard from '../cards/MiniSliderCard'
import ItemsListPopup from '../popups/ItemsListPopup'
type typeMiniSlider = {
	title: string
	items: any
}
const HomeMiniSlider: FC<typeMiniSlider> = ({ title, items }) => {
	const [popupActive, setPopupActive] = useState(false)

	const shortItems = items ? items.slice(0, 9) : Array(8)

	const onShowClick = () => {
		console.log('show click')

		setPopupActive(true)
	}
	return (
		<div className='homeMiniSlider'>
			<div className='homeMiniSlider__title'>{title}</div>
			<Swiper
				className='swiper homeMiniSlider__container'
				modules={[Navigation]}
				speed={2400}
				navigation
				spaceBetween={25}
				height={200}
				slidesPerView={4}
				autoplay={{ delay: 3000 }}
			>
				<div className='swiper-wrapper homeMiniSlider__wrapper'>
					{shortItems.map((item: any, index: number) => (
						<SwiperSlide
							className='swiper-slide homeMiniSlider__item'
							key={index}
						>
							<MiniSliderCard item={item} />
						</SwiperSlide>
					))}
					<SwiperSlide className='swiper-slide  homeMiniSlider__item'>
						<div
							className='homeMiniSlider__item-text'
							onClick={() => onShowClick()}
						>
							<BsFillArrowRightCircleFill />
							<div>Показать все</div>
						</div>
					</SwiperSlide>
				</div>
			</Swiper>
			{popupActive && (
				<ItemsListPopup
					title={title}
					items={items}
					setPopupActive={setPopupActive}
				/>
			)}
		</div>
	)
}

export default HomeMiniSlider
