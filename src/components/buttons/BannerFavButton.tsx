import React, { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
	addFavoritesItem,
	removeFavoritesItem,
} from '../../redux/slices/favorites/favoritesSlice'
type typeBannerFavButton = {
	film: any
}
const BannerFavButton: FC<typeBannerFavButton> = ({ film }) => {
	const dispatch = useAppDispatch()
	const itemsFav = useAppSelector(state => state.favorites.items)
	const activeFav = itemsFav.filter((item: any) => item.id === film.id)
	return (
		<>
			{activeFav.length !== 0 ? (
				<a
					className='active'
					href='#'
					onClick={() => dispatch(removeFavoritesItem(film))}
				>
					<AiFillHeart /> В избранном
				</a>
			) : (
				<a href='#' onClick={() => dispatch(addFavoritesItem(film))}>
					<AiOutlineHeart /> В избранное
				</a>
			)}
		</>
	)
}

export default React.memo(BannerFavButton)