import { FC, useEffect, useState } from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { useInView } from 'react-intersection-observer'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import MiniSliderCard from '../cards/MiniSliderCard'
import ItemsListPopup from '../popups/ItemsListPopup'
import MiniSliderSkeleton from '../skeletons/MiniSliderSkeleton'
type typeMiniSlider = {
	title: string
	fetchFunction?: any
	query?: string
	items?: any
}
const HomeMiniSlider: FC<typeMiniSlider> = ({
	title,
	fetchFunction,
	query,
	items,
}) => {
	const [popupActive, setPopupActive] = useState(false)
	const [firstTime, setFirstTime] = useState(false)
	const [fItems, setFItems] = useState<any>(items ? items : [])

	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	})

	const onShowClick = () => {
		console.log('show click')
		setPopupActive(true)
	}

	useEffect(() => {
		if (fetchFunction && query && firstTime) {
			fetchFunction(query).then((fetchItems: any) => {
				console.log(query, fetchItems)

				setFItems(fetchItems)
			})
		} else {
			setFirstTime(true)
		}
	}, [inView])

	return (
		<div className='homeMiniSlider' ref={ref}>
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
					{(fItems ? fItems.slice(0, 9) : Array(8)).map(
						(item: any, index: number) => (
							<SwiperSlide
								className='swiper-slide homeMiniSlider__item'
								key={index}
							>
								<LazyLoadComponent placeholder={<MiniSliderSkeleton />}>
									<MiniSliderCard item={item} />
								</LazyLoadComponent>
							</SwiperSlide>
						)
					)}
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
					items={fItems}
					setPopupActive={setPopupActive}
				/>
			)}
		</div>
	)
}

export default HomeMiniSlider
