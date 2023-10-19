import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import NextArrow from '../components/arrows/NextArrow'
import PrevArrow from '../components/arrows/PrevArrow'

export const homeSliderSettings = (
	countSlide: number,
	setCountSlide: ActionCreatorWithPayload<number, 'home/setCountSlide'>
) => {
	return {
		infinite: true,
		centerMode: true,
		centerPadding: '60px',
		draggable: false,
		slidesToShow: 3,
		speed: 1000,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
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
}
