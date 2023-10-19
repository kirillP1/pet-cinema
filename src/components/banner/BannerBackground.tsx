import { FC } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useAppSelector } from '../../hooks/redux'
type typeBannerBackground = {
	film: any
}
const BannerBackground: FC<typeBannerBackground> = ({ film }) => {
	const { scrollTop, itemsData, activeSlide } = useAppSelector(
		state => state.home.banner
	)
	return (
		<div
			className='banner__background'
			style={{
				transform: `translate3d(0, calc((${scrollTop}px) / 3.6), 0)`,
			}}
		>
			<LazyLoadImage
				src={film.backdrop.url}
				effect='blur'
				placeholderSrc={film.backdrop.url}
				width='100%'
				height='100%'
			/>
		</div>
	)
}

export default BannerBackground
