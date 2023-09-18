import { useEffect, useState } from 'react'
import { AiFillPlayCircle, AiOutlinePlus } from 'react-icons/ai'
import Slider from 'react-slick'
import { headerSliderSlides } from '../../data/headerSliderSlides'
import NextArrow from '../arrows/NextArrow'
import PrevArrow from '../arrows/PrevArrow'

const Banner = () => {
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
	)
}

export default Banner
