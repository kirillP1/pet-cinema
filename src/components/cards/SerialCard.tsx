import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { IFilms } from '../../data/filmsLocalData'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
	addFavoritesItem,
	removeFavoritesItem,
} from '../../redux/slices/favorites/favoritesSlice'
type typeSerialCard = {
	item: IFilms | MovieDtoV13
}
const SerialCard: FC<typeSerialCard> = ({ item }) => {
	const dispatch = useAppDispatch()

	const itemsFav = useAppSelector(state => state.favorites.items)
	const activeFav = itemsFav.filter(
		(itemFav: IFilms | MovieDtoV13) => itemFav.id === item.id
	)

	return (
		<div className='serials__items-poster'>
			<>
				{activeFav.length !== 0 ? (
					<div
						className='serials__items-item-favorites'
						onClick={() => dispatch(removeFavoritesItem(item))}
					>
						<AiFillHeart />
					</div>
				) : (
					<div
						className='serials__items-item-favorites'
						onClick={() => dispatch(addFavoritesItem(item))}
					>
						<AiOutlineHeart />
					</div>
				)}
			</>
			<Link
				to={'/serials/' + item.id}
				className='serials__items-item'
				style={{
					background: `url(${item.poster && item.poster.previewUrl}) no-repeat`,
				}}
			>
				<div className='serials__items-item-black'></div>
				<div
					className={
						'serials__items-item-rating ' +
						(item.rating && item.rating.kp && item.rating.kp > 7
							? 'height-rating'
							: '')
					}
				>
					{item.rating && item.rating.kp && item.rating.kp.toFixed(1)}
				</div>
				<div className='serials__items-item-age'>
					{item.ageRating}
					{Number.isInteger(item.ageRating) ? '+' : ''}
				</div>
			</Link>
			<h4>
				{item.name && item.name?.length > 18 && item.name
					? item.name.slice(0, 18).trim() + '...'
					: item.name}
			</h4>
		</div>
	)
}

export default SerialCard
