import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import { FC } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import { IFilms } from '../../data/filmsLocalData'
import { useAppSelector } from '../../hooks/redux'
import MiniSliderFavButton from '../buttons/MiniSliderFavButton'
type typeMiniSliderCard = {
	item: IFilms | MovieDtoV13
}
const MiniSliderCard: FC<typeMiniSliderCard> = ({ item }) => {
	const itemsFav = useAppSelector(state => state.favorites.items)
	const activeFav = itemsFav.filter(
		(itemFav: IFilms | MovieDtoV13) => itemFav.id === item.id
	)
	return (
		<div className='miniSliderCard__items-wrapper'>
			<MiniSliderFavButton activeFav={activeFav} item={item} />
			<Link to={'/films/' + item.id} className='miniSliderCard__items-item'>
				<LazyLoadImage
					src={
						item.backdrop
							? item.backdrop.previewUrl
							: item.poster && item.poster.previewUrl
					}
					effect='blur'
					placeholderSrc={
						item.backdrop
							? item.backdrop.previewUrl
							: item.poster && item.poster.previewUrl
					}
					width='100%'
					className='miniSliderCard__items-item-background'
				/>
				<div className='miniSliderCard__items-item-black'></div>
				<img
					className='miniSliderCard__items-item-logo'
					src={item.logo && item.logo.url}
				/>

				<div className='miniSliderCard__items-item-age'>
					{item.ageRating && item.ageRating + '+'}
				</div>
				<div
					className={
						'miniSliderCard__items-item-rating ' +
						(item.rating && item.rating.kp && item.rating.kp > 7
							? 'height-rating'
							: '')
					}
				>
					{item.rating && item.rating.kp && item.rating.kp.toFixed(1)}
				</div>
			</Link>
		</div>
	)
}

export default MiniSliderCard
