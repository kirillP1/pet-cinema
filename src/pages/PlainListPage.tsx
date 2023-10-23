import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import { FC } from 'react'
import FavoriteCard from '../components/cards/FavoriteCard'
import { IFilms } from '../data/filmsLocalData'
type typePlainListPage = {
	title: string
	items: IFilms[] | MovieDtoV13[]
}
const PlainListPage: FC<typePlainListPage> = ({ title, items }) => {
	return (
		<div className='plainListPage'>
			<div className='plainListPage__container'>
				<div className='plainListPage__items'>
					{items[0] &&
						items.map((item: IFilms | MovieDtoV13, index: number) => (
							<FavoriteCard item={item} key={index} />
						))}
				</div>
			</div>
		</div>
	)
}

export default PlainListPage
