import { FC } from 'react'
import FavoriteCard from '../components/cards/FavoriteCard'
import { useAppDispatch, useAppSelector } from '../hooks/redux'

const Favorites: FC = () => {
	const items = useAppSelector(state => state.favorites.items)
	const dispatch = useAppDispatch()
	console.log(items)

	console.log(items[0])

	return (
		<div className='favorites'>
			<div className='favorites__container'>
				<div className='favorites__items'>
					{items[0] &&
						items.map((item: any, index: number) => (
							<FavoriteCard item={item} key={index} />
						))}
				</div>
			</div>
		</div>
	)
}

export default Favorites
