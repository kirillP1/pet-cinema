import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useInView } from 'react-intersection-observer'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
	addFavoritesItem,
	removeFavoritesItem,
} from '../../redux/slices/favorites/favoritesSlice'
type typeItemsListPopupCard = {
	item: any
}
const ItemsListPopupCard: FC<typeItemsListPopupCard> = ({ item }) => {
	const dispatch = useAppDispatch()
	const itemsFav = useAppSelector(state => state.favorites.items)
	const activeFav = itemsFav.filter((itemFav: any) => itemFav.id === item.id)
	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: true,
	})
	return (
		<div className='ItemsListPopupCard' ref={ref}>
			<>
				{activeFav.length !== 0 ? (
					<div
						className='ItemsListPopupCard__favorites'
						onClick={() => dispatch(removeFavoritesItem(item))}
					>
						<AiFillHeart />
					</div>
				) : (
					<div
						className='ItemsListPopupCard__favorites'
						onClick={() => dispatch(addFavoritesItem(item))}
					>
						<AiOutlineHeart />
					</div>
				)}
			</>
			<Link to={'/films/' + item.id} className='ItemsListPopupCard__item'>
				{inView ? (
					<LazyLoadImage
						src={
							item.backdrop ? item.backdrop.previewUrl : item.poster.previewUrl
						}
						effect='blur'
						placeholderSrc={
							item.backdrop ? item.backdrop.previewUrl : item.poster.previewUrl
						}
						width='100%'
						height='100%'
						className='ItemsListPopupCard__background'
					/>
				) : (
					<div
						style={{
							margin: '5px',
							width: '100%',
							height: '100%',
							backgroundColor: 'lightgray',
							borderRadius: '10px',
						}}
					></div>
				)}
				<div className='ItemsListPopupCard__black'></div>
				<img
					className='ItemsListPopupCard__logo'
					src={item.logo && item.logo.url}
				/>

				<div className='ItemsListPopupCard__age'>{item.ageRating}+</div>
				<div
					className={
						'ItemsListPopupCard__rating ' +
						(item.rating.kp > 7 ? 'height-rating' : '')
					}
				>
					{item.rating.kp.toFixed(1)}
				</div>
			</Link>
		</div>
	)
}

export default ItemsListPopupCard
