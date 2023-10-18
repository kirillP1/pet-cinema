import { FC } from 'react'
type typeFilmPersons = {
	film: any
}

const FilmPersons: FC<typeFilmPersons> = ({ film }) => {
	return (
		<div className='filmPersons' id='persons'>
			<h2 className='filmPersons__header'>Актеры и создатели</h2>
			<div className='filmPersons__items'>
				{film.persons?.map((person: any, index: number) => (
					<div className='filmPersons__item' key={index}>
						<div
							style={{ background: `url(${person.photo}) no-repeat` }}
							className='filmPersons__item-img'
						/>
						<h4 className='filmPersons__item-name'>{person.name}</h4>
						<div className='filmPersons__item-profession'>
							{person.profession}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default FilmPersons
