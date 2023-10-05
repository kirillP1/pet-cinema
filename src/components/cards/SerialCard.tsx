import { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
type typeSerialCard = {
	item: any
}
const SerialCard: FC<typeSerialCard> = ({ item }) => {
	const onFavClick = () => {}
	return (
		<Link to={'/serials/' + item.id} className='serials__items-poster'>
			<div
				className='serials__items-item'
				style={{
					background: `url(${item.poster.previewUrl}) no-repeat`,
				}}
			>
				<div className='serials__items-item-black'></div>
				<div
					className={
						'serials__items-item-rating ' +
						(item.rating.kp > 7 ? 'height-rating' : '')
					}
				>
					{item.rating.kp.toFixed(1)}
				</div>
				{item.ageRating && (
					<div className='serials__items-item-age'>{item.ageRating}+</div>
				)}
				<div
					className='serials__items-item-favorites'
					onClick={() => onFavClick()}
				>
					<AiOutlineHeart />
				</div>
			</div>
			<h4>
				{item.name?.length > 18 && item.name
					? item.name.slice(0, 18).trim() + '...'
					: item.name}
			</h4>
		</Link>
	)
}

export default SerialCard
