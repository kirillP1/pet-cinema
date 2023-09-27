import { useEffect, useState } from 'react'
import { AiFillPlayCircle, AiOutlinePlus } from 'react-icons/ai'
import Slider from 'react-slick'
import { headerSliderSlides } from '../../data/headerSliderSlides'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchFilms } from '../../redux/slices/ActionsCreators'
import { statusLoadingEnum } from '../../redux/slices/filmsSlice'
import NextArrow from '../arrows/NextArrow'
import PrevArrow from '../arrows/PrevArrow'

const Banner = () => {
	const [activeSlide, setActiveSlide] = useState<number>(1)
	const [countSlide, setCountSlide] = useState<number>(1)
	const [scrollTop, setScrollTop] = useState<number>(0)
	const dispatch = useAppDispatch()
	const { items, status } = useAppSelector(state => state.films)
	const itemsData = items.length !== 0 ? items : headerSliderSlides
	//const itemsData = items
	useEffect(() => {
		dispatch(fetchFilms())
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

	useEffect(() => {
		let c: number

		if (countSlide % itemsData.length === 0) {
			c = itemsData.length
			console.log(c)
		} else {
			c = countSlide % itemsData.length
		}
		setActiveSlide(c - 1)
	}, [countSlide])

	useEffect(() => {
		window.addEventListener('scroll', e => {
			setScrollTop(window.scrollY)
		})
	}, [])
	console.log(itemsData)

	if (status === statusLoadingEnum.LOADING || itemsData.length === 0) {
		return <>Загрузка...</>
	} else {
		return (
			<div className='banner'>
				<div
					className='banner__background'
					style={{
						transform: `translate3d(0, calc((${scrollTop}px) / 3.6), 0)`,
						background: `url(${itemsData[activeSlide].backdrop.url}) no-repeat`,
					}}
				></div>
				<div
					className='banner__content active banner__element'
					style={{
						transform: `translate3d(0, calc((${scrollTop}px) / 7.7), 0)`,
					}}
				>
					<h2 className='banner__content-title'>
						<img
							src={
								itemsData[activeSlide].logo && itemsData[activeSlide].logo.url
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
						<a href='#'>
							<AiFillPlayCircle /> Watch
						</a>
						<a href='#'>
							<AiOutlinePlus /> My List
						</a>
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
							{itemsData.map((item: any, index: number) => (
								<div key={index} className='carousel-item'>
									<img src={item.poster.url} alt='' />
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
