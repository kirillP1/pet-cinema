import { MovieDtoV13, PersonInMovie } from '@openmoviedb/kinopoiskdev_client'
import { FC } from 'react'
import { IFilms } from '../../data/filmsLocalData'
import PersonCard from '../cards/PersonCard'
type typeFilmPersons = {
	film: IFilms | MovieDtoV13
}

const FilmPersons: FC<typeFilmPersons> = ({ film }) => {
	return (
		<div className='filmPersons' id='persons'>
			<h2 className='filmPersons__header'>Актеры и создатели</h2>
			<div className='filmPersons__items'>
				{film.persons?.map((person: PersonInMovie, index: number) => (
					<PersonCard person={person} key={index} />
				))}
			</div>
		</div>
	)
}

export default FilmPersons
