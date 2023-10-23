import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import { FC } from 'react'
import { IFilms } from '../../data/filmsLocalData'

type typeFilmSingleBanner = {
	film: IFilms | MovieDtoV13
}

const FilmDescription: FC<typeFilmSingleBanner> = ({ film }) => {
	return (
		<div className='filmDescription'>
			<div className='filmDescription-text'>
				{film.description ? film.description : film.shortDescription}
			</div>
		</div>
	)
}

export default FilmDescription
