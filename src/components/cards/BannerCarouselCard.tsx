import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { IFilms } from '../../data/filmsLocalData'
type typeBannerCarouselCard = {
	item: IFilms | MovieDtoV13
}
const BannerCarouselCard: FC<typeBannerCarouselCard> = ({ item }) => {
	return (
		<div className='carousel-item'>
			<Link to={'/films/' + item.id}>
				<img src={item.poster && item.poster.url} alt='' />
			</Link>
		</div>
	)
}

export default React.memo(BannerCarouselCard)
