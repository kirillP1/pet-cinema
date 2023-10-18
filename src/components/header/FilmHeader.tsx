import { FC } from 'react'

type typeFilmSingleBanner = {
	film: any
}
const FilmHeader: FC<typeFilmSingleBanner> = ({ film }) => {
	return (
		<div className='filmHeader'>
			<h1 className='filmHeader__title'>{film.name}</h1>
			<div className='filmHeader__desc'>
				<div
					className={
						'filmHeader__desc-rating ' +
						(film.rating.kp > 7 ? 'height-rating' : '')
					}
				>
					{film.rating.kp.toFixed(1)}
				</div>
				<div className='filmHeader__desc-year'>{film.year}</div>
				<div className='filmHeader__desc-country'>{film.countries[0].name}</div>
				<div className='filmHeader__desc-genres'>{film.genres[0].name}</div>
				<div className='filmHeader__desc-ageLimit'>{film.ageRating}+</div>
			</div>
		</div>
	)
}

export default FilmHeader
