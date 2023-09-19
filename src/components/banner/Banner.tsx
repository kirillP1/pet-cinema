import { useEffect, useState } from 'react'
import { AiFillPlayCircle, AiOutlinePlus } from 'react-icons/ai'
import Slider from 'react-slick'
import { headerSliderSlides } from '../../data/headerSliderSlides'
import NextArrow from '../arrows/NextArrow'
import PrevArrow from '../arrows/PrevArrow'

const Banner = () => {
	const [activeSlide, setActiveSlide] = useState<number>(1)
	const [countSlide, setCountSlide] = useState<number>(1)
	const [scrollTop, setScrollTop] = useState<number>(0)

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

		if (countSlide % 5 === 0) {
			c = 5
		} else {
			c = countSlide % 5
		}
		setActiveSlide(c - 1)
	}, [countSlide])

	useEffect(() => {
		window.addEventListener('scroll', e => {
			setScrollTop(window.scrollY)
		})
	}, [])

	return (
		<div className='banner'>
			<div
				className='banner__background'
				style={{
					transform: `translate3d(0, calc((${scrollTop}px) / 3.6), 0)`,
					background: `url(${headerSliderSlides[activeSlide].bgImg}) no-repeat`,
				}}
			></div>
			<div
				className='banner__content active banner__element'
				style={{ transform: `translate3d(0, calc((${scrollTop}px) / 7.7), 0)` }}
			>
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
						<AiOutlinePlus /> My List
					</a>
				</div>
			</div>
			<div
				className='carousel-box banner__element'
				style={{ transform: `translate3d(0, calc((${scrollTop}px) / 7.7), 0)` }}
			>
				<div className='carousel'>
					<Slider {...settings}>
						{headerSliderSlides.map((item, index) => (
							<div key={index} className='carousel-item'>
								<img src={item.img} alt='' />
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	)
}

export default Banner
