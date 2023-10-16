import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
	addFavoritesItem,
	removeFavoritesItem,
} from '../../redux/slices/favoritesSlice'
type typeMiniSliderCard = {
	item: any
}
const MiniSliderCard: FC<typeMiniSliderCard> = ({ item }) => {
	const dispatch = useAppDispatch()
	const itemsFav = useAppSelector(state => state.favorites.items)
	const activeFav = itemsFav.filter((itemFav: any) => itemFav.id === item.id)
	return (
		<div className='miniSliderCard__items-wrapper'>
			<>
				{activeFav.length !== 0 ? (
					<div
						className='miniSliderCard__items-item-favorites'
						onClick={() => dispatch(removeFavoritesItem(item))}
					>
						<AiFillHeart />
					</div>
				) : (
					<div
						className='miniSliderCard__items-item-favorites'
						onClick={() => dispatch(addFavoritesItem(item))}
					>
						<AiOutlineHeart />
					</div>
				)}
			</>
			<Link to={'/films/' + item.id} className='miniSliderCard__items-item'>
				<LazyLoadImage
					src={item.backdrop ? item.backdrop.url : item.poster.url}
					effect='blur'
					placeholderSrc={item.backdrop ? item.backdrop.url : item.poster.url}
					width='100%'
					className='miniSliderCard__items-item-background'
				/>
				<div className='miniSliderCard__items-item-black'></div>
				<img className='miniSliderCard__items-item-logo' src={item.logo.url} />

				<div className='miniSliderCard__items-item-age'>{item.ageRating}+</div>
				<div
					className={
						'miniSliderCard__items-item-rating ' +
						(item.rating.kp > 7 ? 'height-rating' : '')
					}
				>
					{item.rating.kp.toFixed(1)}
				</div>
			</Link>
		</div>
	)
}

export default MiniSliderCard
