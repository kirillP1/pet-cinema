import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { IFilms } from '../../data/filmsLocalData'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
	addFavoritesItem,
	removeFavoritesItem,
} from '../../redux/slices/favorites/favoritesSlice'
type typeFilmCard = {
	item: IFilms
}
const FilmCard: FC<typeFilmCard> = ({ item }) => {
	const dispatch = useAppDispatch()

	const itemsFav = useAppSelector(state => state.favorites.items)
	const activeFav = itemsFav.filter((itemFav: any) => itemFav.id === item.id)

	return (
		<div className='films__items-poster'>
			<>
				{activeFav.length !== 0 ? (
					<div
						className='films__items-item-favorites'
						onClick={() => dispatch(removeFavoritesItem(item))}
					>
						<AiFillHeart />
					</div>
				) : (
					<div
						className='films__items-item-favorites'
						onClick={() => dispatch(addFavoritesItem(item))}
					>
						<AiOutlineHeart />
					</div>
				)}
			</>
			<Link
				to={'/films/' + item.id}
				className='films__items-item'
				style={{
					background: `url(${item.poster.previewUrl}) no-repeat`,
				}}
			>
				<div className='films__items-item-black'></div>
				<div
					className={
						'films__items-item-rating ' +
						(item.rating.kp > 7 ? 'height-rating' : '')
					}
				>
					{item.rating.kp.toFixed(1)}
				</div>
				<div className='films__items-item-age'>
					{item.ageRating}
					{Number.isInteger(item.ageRating) ? '+' : ''}
				</div>
			</Link>
			<h4>
				{item.name?.length > 18 && item.name
					? item.name.slice(0, 18).trim() + '...'
					: item.name}
			</h4>
		</div>
	)
}

export default FilmCard
