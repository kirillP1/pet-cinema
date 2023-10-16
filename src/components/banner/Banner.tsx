import { useEffect, useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { IFilms, filmsLocalData } from '../../data/filmsLocalData'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { addFavoritesItem } from '../../redux/slices/favoritesSlice'
import { fetchFilms } from '../../redux/slices/filmsActionsCreators'
import { statusLoadingEnum } from '../../redux/slices/serialsSlice'
import NextArrow from '../arrows/NextArrow'
import PrevArrow from '../arrows/PrevArrow'
import BannerButton from '../buttons/BannerButton'

const Banner = () => {
	const [activeSlide, setActiveSlide] = useState<number>(1)
	const [countSlide, setCountSlide] = useState<number>(1)
	const [scrollTop, setScrollTop] = useState<number>(0)
	const dispatch = useAppDispatch()
	const { items, status } = useAppSelector(state => state.films)

	const itemsData =
		items.length !== 0 ? items.slice(0, 5) : filmsLocalData.slice(0, 5)
	//const itemsData = items
	useEffect(() => {
		dispatch(fetchFilms())
		console.log('fetch')
	}, [])

	var settings = {
		infinite: true,
		centerMode: true,
		centerPadding: '60px',
		draggable: false,
		slidesToShow: 3,
		speed: 1000,
		nextArrow: (
			<NextArrow countSlide={countSlide} setCountSlide={setCountSlide} />
		),
		prevArrow: (
			<PrevArrow countSlide={countSlide} setCountSlide={setCountSlide} />
		),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1,
				},
			},
		],
	}
	const favClick = (film: IFilms) => {
		console.log('favClick')

		dispatch(addFavoritesItem(film))
	}
	useEffect(() => {
		let c: number

		if (countSlide % itemsData.length === 0) {
			c = itemsData.length
			console.log(c)
		} else {
			c = countSlide % itemsData.length
		}
		setActiveSlide(c - 1)
		console.log(activeSlide, countSlide)
	}, [countSlide])

	useEffect(() => {
		window.addEventListener('scroll', e => {
			setScrollTop(window.scrollY)
		})
	}, [])
	console.log('Banner')

	if (status === statusLoadingEnum.LOADING || itemsData.length === 0) {
		return <>Загрузка...</>
	} else {
		return (
			<div className='banner'>
				<div
					className='banner__background'
					style={{
						transform: `translate3d(0, calc((${scrollTop}px) / 3.6), 0)`,
					}}
				>
					<LazyLoadImage
						src={itemsData[activeSlide].backdrop.url}
						effect='blur'
						placeholderSrc={itemsData[activeSlide].backdrop.url}
						width='100%'
						height='100%'
					/>
				</div>
				<div
					className='banner__content active banner__element'
					style={{
						transform: `translate3d(0, calc((${scrollTop}px) / 7.7), 0)`,
					}}
				>
					<h2 className='banner__content-title'>
						<LazyLoadImage
							src={
								itemsData[activeSlide].logo && itemsData[activeSlide].logo?.url
							}
							effect='blur'
							placeholderSrc={
								itemsData[activeSlide].logo && itemsData[activeSlide].logo?.url
							}
							alt={itemsData[activeSlide].name}
						/>
					</h2>
					<h4>
						<span>{itemsData[activeSlide].year}</span>
						{
							//<span><i>{headerSliderSlides[activeSlide].year}+</i></span>
						}
						<span>{itemsData[activeSlide].movieLength} минут</span>
						<span>
							{itemsData[activeSlide].genres.map(
								(genre: any) => `${genre.name} `
							)}
						</span>
					</h4>
					<p>{itemsData[activeSlide].shortDescription}...</p>
					<div className='banner__content-buttons'>
						<Link to={'/films/' + itemsData[activeSlide].id}>
							<AiFillPlayCircle /> Смотреть
						</Link>

						<BannerButton film={itemsData[activeSlide]} />
					</div>
				</div>
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
			</div>
		)
	}
}
export default Banner
