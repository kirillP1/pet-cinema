import { FC } from 'react'
import { useAppSelector } from '../../hooks/redux'
import BannerFavButton from '../buttons/BannerFavButton'

const BannerSingleContent: FC = () => {
	const { film } = useAppSelector(state => state.singleFilm)
	const { scrollTop } = useAppSelector(state => state.home.banner)
	return (
		<div
			className='filmSingleBanner__content active filmSingleBanner__element'
			style={{
				transform: `translate3d(0, calc((${scrollTop}px) / 5.7), 0)`,
			}}
		>
			<h2 className='filmSingleBanner__content-title'>
				{film.logo?.url ? (
					<img src={film.logo && film.logo?.url} alt={film.name} />
				) : (
					film.name
				)}
			</h2>
			<div className='filmSingleBanner__content-buttons '>
				<BannerFavButton film={film} />
			</div>
		</div>
	)
}

export default BannerSingleContent
