import { FC, useEffect, useState } from 'react'
import {
	AiFillPlayCircle,
	AiOutlinePlus,
	AiOutlineSearch,
} from 'react-icons/ai'
import { FaHouse } from 'react-icons/fa6'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import NextArrow from '../components/arrows/NextArrow'
import PrevArrow from '../components/arrows/PrevArrow'
import { headerSliderSlides } from '../data/headerSliderSlides'

const Home: FC = () => {
	const [activeSlide, setActiveSlide] = useState<number>(1)
	const [countSlide, setCountSlide] = useState<number>(1)
	var settings = {
		dots: true,
		infinite: true,
		centerMode: true,
		centerPadding: '60px',
		draggable: false,
		slidesToShow: 3,
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

	const changeBg = (bg: string, title?: string) => {
		console.log('in')
	}

	useEffect(() => {
		let c: number
		console.log('active b', activeSlide)

		if (countSlide % 5 === 0) {
			console.log(countSlide % 5)
			c = 5
		} else {
			c = countSlide % 5
		}
		console.log('countSlide', c)
		setActiveSlide(c - 1)
		console.log('active', activeSlide)
	}, [countSlide])

	console.log('active outside', activeSlide)
	return (
		<div className='Home'>
			<header className='header'>
				<a href='#' className='header__logo'>
					ПоискФильм
				</a>
				<ul className='header__nav'>
					<li>
						<a href='#'>
							<FaHouse />
							Главная
						</a>
					</li>
					<li>
						<a href='#'>Франшизы</a>
					</li>
					<li>
						<a href='#'>Категории</a>
					</li>
					<li>
						<a href='#'>Фильмы</a>
					</li>
					<li>
						<a href='#'>Сериалы</a>
					</li>
				</ul>
				<div className='header__search'>
					<input type='text' placeholder='Поиск...' />
					<AiOutlineSearch />
				</div>
			</header>
			<div
				className='banner'
				style={{
					background: `url(${headerSliderSlides[activeSlide].bgImg}) no-repeat`,
				}}
			>
				<div className='banner__content active'>
					<h2 className='banner__content-title'>
						{headerSliderSlides[activeSlide].title}
					</h2>
					<h4>
						<span>{headerSliderSlides[activeSlide].ageIssue}</span>
						<span>
							<i>{headerSliderSlides[activeSlide].ageLimit}+</i>
						</span>
						<span>{headerSliderSlides[activeSlide].duration}</span>
						<span>{headerSliderSlides[activeSlide].genre}</span>
					</h4>
					<p>{headerSliderSlides[activeSlide].desc}</p>
					<div className='banner__content-buttons'>
						<a href='#'>
							<AiFillPlayCircle /> Watch
						</a>
						<a href='#'>
							{' '}
							<AiOutlinePlus /> My List
						</a>
					</div>
				</div>
				<div className='carousel-box'>
					<div className='carousel'>
						<Slider {...settings}>
							{headerSliderSlides.map((item, index) => (
								<div
									key={index}
									className='carousel-item'
									onClick={() => changeBg(item.bgImg)}
								>
									<img src={item.img} alt='' />
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
