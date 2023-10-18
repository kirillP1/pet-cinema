import { FC } from 'react'

type typeFilmSingleBanner = {
	film: any
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
