import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import { FC } from 'react'
import FavoriteCard from '../components/cards/FavoriteCard'
import { IFilms } from '../data/filmsLocalData'
import { useAppSelector } from '../hooks/redux'

const Favorites: FC = () => {
	let items = useAppSelector(state => state.favorites.items)
	return (
		<div className='favorites'>
			<div className='favorites__container'>
				<div className='favorites__items'>
					{items[0] &&
						items.map((item: IFilms | MovieDtoV13, index: number) => (
							<FavoriteCard item={item} key={index} />
						))}
				</div>
			</div>
		</div>
	)
}

export default Favorites
