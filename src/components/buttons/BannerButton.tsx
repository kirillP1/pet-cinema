import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
	addFavoritesItem,
	removeFavoritesItem,
} from '../../redux/slices/favoritesSlice'
type typeBannerButton = {
	film: any
}
const BannerButton: FC<typeBannerButton> = ({ film }) => {
	const dispatch = useAppDispatch()
	const itemsFav = useAppSelector(state => state.favorites.items)
	const activeFav = itemsFav.filter((item: any) => item.id === film.id)
	console.log(activeFav)
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

export default BannerButton
