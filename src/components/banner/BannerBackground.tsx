import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import { FC } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { IFilms } from '../../data/filmsLocalData'
import { useAppSelector } from '../../hooks/redux'
type typeBannerBackground = {
	film: IFilms | MovieDtoV13
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
				src={film.backdrop && (film.backdrop.url as string)}
				effect='blur'
				placeholderSrc={film.backdrop && (film.backdrop.url as string)}
				width='100%'
				height='100%'
			/>
		</div>
	)
}

export default BannerBackground
