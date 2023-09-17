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
import mermaidTitle from '../assets/img/movies/titles/the-little-mermaid-title.png'
import { headerSlider } from '../data/headerSlider'

const Home: FC = () => {
	var settings = {
		centerMode: true,
		centerPadding: '60px',
		draggable: false,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3,
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

	const [activeSlide, setActiveSlide] = useState<number>(1)
	console.log(headerSlider[0])

	const changeBg = (bg: string, title?: string) => {
		console.log('in')
	}

	useEffect(() => {
		/*let elements: NodeListOf<HTMLDivElement> =
			document.querySelectorAll('.carousel')
		var instance = M.Carousel.init(
			elements,
			{ enableTouch: false },
			{ dragged: false }
		)*/
	}, [])
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
					background:
						'https://avatars.mds.yandex.net/i?id=2e2fb44ddfd794b9dd31246170fe09eb_l-8219252-images-thumbs&n=13',
				}}
			>
				<div className='banner__content active'>
					<img
						src={mermaidTitle}
						className='banner__content-title'
						alt='title'
					/>
					<h4>
						<span>2023</span>
						<span>
							<i>12+</i>
						</span>
						<span>2h 14m</span>
						<span>Romance</span>
					</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nisi
						nostrum ipsa sed animi autem nemo fugit accusamus voluptatem iste
						enim id vero possimus incidunt, impedit eligendi corporis voluptates
						vel.
					</p>
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
							{headerSlider.map((item, index) => (
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
