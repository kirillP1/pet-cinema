import { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { removeFavoritesItem } from '../../redux/slices/favoritesSlice'
type typeFavoriteCard = {
	item: any
}
const FavoriteCard: FC<typeFavoriteCard> = ({ item }) => {
	const dispatch = useAppDispatch()

	return (
		<div className='favorites__items-wrapper'>
			<div
				className='favorites__items-close'
				onClick={() => dispatch(removeFavoritesItem(item))}
			>
				<AiOutlineClose />
			</div>
			<Link
				to={'/films/' + item.id}
				className='favorites__items-item'
				style={{ background: `url(${item.backdrop.url}) no-repeat` }}
			>
				<div className='favorites__items-item-black'></div>
				<img className='favorites__items-item-logo' src={item.logo.url} />

				<div className='favorites__items-item-age'>{item.ageRating}+</div>
				<div
					className={
						'favorites__items-item-rating ' +
						(item.rating.kp > 7 ? 'height-rating' : '')
					}
				>
					{item.rating.kp.toFixed(1)}
				</div>
			</Link>
		</div>
	)
}

export default FavoriteCard
