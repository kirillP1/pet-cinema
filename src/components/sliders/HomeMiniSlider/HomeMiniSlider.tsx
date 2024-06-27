import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
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
import { NolanFilmsData } from '../../../data/NolanFilmsData'
import { IFilms } from '../../../data/filmsLocalData'
import { useAppSelector } from '../../../hooks/redux'
import MiniSliderCard from '../../cards/MiniSliderCard'
import ItemsListPopup from '../../popups/ItemsListPopup'
import MiniSliderSkeleton from '../../skeletons/MiniSliderSkeleton'
type typeMiniSlider = {
	title: string
	fetchFunction?: (
		person: string
	) => Promise<IFilms[] | MovieDtoV13[] | undefined>
	query?: string
	items?: IFilms[] | MovieDtoV13[]
}
const HomeMiniSlider: FC<typeMiniSlider> = ({
	title,
	fetchFunction,
	query,
	items,
}) => {
	const [popupActive, setPopupActive] = useState(false)
	const [firstTime, setFirstTime] = useState(true)
	const { width } = useAppSelector(state => state.app)
	const [fItems, setFItems] = useState<IFilms[] | MovieDtoV13[] | undefined>(
		items ? items : []
	)

	const sliderFItems = fItems ? fItems.slice(0, 9) : Array(8)

	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	})

	const onShowClick = () => {
		setPopupActive(true)
	}

	useEffect(() => {
		if (fetchFunction && query) {
			const result = async () => {
				fetchFunction(query).then(
					(fetchItems: IFilms[] | MovieDtoV13[] | undefined) => {
						if (fetchItems) {
							setFItems(fetchItems)
							console.log('HomeMiniSlider then', fetchItems)
						} else {
							if (query === 'Кристофер Нолан') {
								setFItems(NolanFilmsData)
							}
							if (query === 'Квентин Тарантино') {
								setFItems(NolanFilmsData)
							}
						}
					}
				)
			}
			result()
		} else {
			setFirstTime(false)
		}
	}, [inView])

	console.log('fItems', fItems)

	return (
		<div className='homeMiniSlider' ref={ref}>
			<div className='homeMiniSlider__title'>{title}</div>
			<Swiper
				className='swiper homeMiniSlider__container'
				modules={[Navigation]}
				speed={2400}
				navigation
				spaceBetween={25}
				height={500}
				slidesPerView={width > 1024 ? 4 : 2}
				autoplay={{ delay: 3000 }}
			>
				<div className='swiper-wrapper homeMiniSlider__wrapper'>
					{sliderFItems.map((item: IFilms | MovieDtoV13, index: number) => (
						<SwiperSlide
							className='swiper-slide homeMiniSlider__item'
							key={index}
						>
							<LazyLoadComponent placeholder={<MiniSliderSkeleton />}>
								<MiniSliderCard item={item} />
							</LazyLoadComponent>
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
			<ItemsListPopup
				title={title}
				items={fItems}
				popupActive={popupActive}
				setPopupActive={setPopupActive}
			/>
		</div>
	)
}

export default HomeMiniSlider
