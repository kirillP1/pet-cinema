import { FC } from 'react'
type typeFranchiseSlide = {
	item: any
}
const FranchiseSlide: FC<typeFranchiseSlide> = ({ item }) => {
	return (
		<>
			<div
				className='franchises-slider__layer'
				data-swiper-parallax='55%'
				style={{
					backgroundImage: `url(${item.bg})`,
				}}
			></div>
			<canvas
				className='particles franchises-slider__layer'
				data-swiper-parallax='30%'
				data-color='#BE9164'
			></canvas>
			<div
				className='franchises-slider__layer franchises-slider__text-wrapper'
				data-swiper-parallax='25%'
			>
				<div className='franchises-slider__text'>
					<div className='franchises-slider__button'>{item.title}</div>
				</div>
			</div>
		</>
	)
}

export default FranchiseSlide
