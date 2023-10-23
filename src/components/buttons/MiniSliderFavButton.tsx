import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import React, { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { IFilms } from '../../data/filmsLocalData'
import { useAppDispatch } from '../../hooks/redux'
import {
	addFavoritesItem,
	removeFavoritesItem,
} from '../../redux/slices/favorites/favoritesSlice'
type typeMiniSliderFavButton = {
	activeFav: IFilms[] | MovieDtoV13[]
	item: IFilms | MovieDtoV13
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
