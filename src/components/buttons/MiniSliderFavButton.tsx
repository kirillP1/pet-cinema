import React, { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useAppDispatch } from '../../hooks/redux'
import {
	addFavoritesItem,
	removeFavoritesItem,
} from '../../redux/slices/favorites/favoritesSlice'
type typeMiniSliderFavButton = {
	activeFav: any
	item: any
}
const MiniSliderFavButton: FC<typeMiniSliderFavButton> = ({
	activeFav,
	item,
}) => {
	const dispatch = useAppDispatch()
	return (
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
	)
}

export default React.memo(MiniSliderFavButton)
