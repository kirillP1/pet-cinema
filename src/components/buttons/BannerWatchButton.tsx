import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import React, { FC } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { IFilms } from '../../data/filmsLocalData'
type typeBannerWatchButton = {
	film: IFilms | MovieDtoV13
}
const BannerWatchButton: FC<typeBannerWatchButton> = ({ film }) => {
	return (
		<Link to={'/films/' + film.id}>
			<AiFillPlayCircle /> Смотреть
		</Link>
	)
}

export default React.memo(BannerWatchButton)
