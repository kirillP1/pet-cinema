import { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useInView } from 'react-intersection-observer'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { removeFavoritesItem } from '../../redux/slices/favoritesSlice'
type typeFavoriteCard = {
	item: any
}
const FavoriteCard: FC<typeFavoriteCard> = ({ item }) => {
	const dispatch = useAppDispatch()
	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: true,
	})
	return (
		<div className='favorites__items-wrapper' ref={ref}>
			<div
				className='favorites__items-close'
				onClick={() => dispatch(removeFavoritesItem(item))}
			>
				<AiOutlineClose />
			</div>

			<Link to={'/films/' + item.id} className='favorites__items-item'>
				{inView ? (
					<LazyLoadImage
						src={item.backdrop.previewUrl}
						effect='blur'
						placeholderSrc={item.backdrop.previewUrl}
						width='100%'
						height='100%'
						className='favorites__items-item-background'
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
