import { FC } from 'react'
import { IPerson } from '../../data/filmsLocalData'
import PersonCard from '../cards/PersonCard'
type typeFilmPersons = {
	film: any
}

const FilmPersons: FC<typeFilmPersons> = ({ film }) => {
	return (
		<div className='filmPersons' id='persons'>
			<h2 className='filmPersons__header'>Актеры и создатели</h2>
			<div className='filmPersons__items'>
				{film.persons?.map((person: IPerson, index: number) => (
					<PersonCard person={person} />
				))}
			</div>
		</div>
	)
}

export default FilmPersons
