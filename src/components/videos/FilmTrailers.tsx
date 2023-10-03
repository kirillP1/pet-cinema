import { FC } from 'react'
import { IFilms } from '../../data/filmsLocalData'

type typeFilmSingleBanner = {
	film: IFilms
}

const FilmTrailers: FC<typeFilmSingleBanner> = ({ film }) => {
	return (
		film.videos.trailers[0] && (
			<div className='filmTrailers' id='trailers'>
				<h2 className='filmTrailers__header'>Трейлеры</h2>
				<div className='filmTrailers__items'>
					{film.videos.trailers.map(trailer => (
						<div className='filmTrailers__item'>
							<iframe
								src={trailer.url && trailer.url}
								allow='autoplay; encrypted-media'
								width={'100%'}
								height={'100%'}
							></iframe>
						</div>
					))}
				</div>
			</div>
		)
	)
}

export default FilmTrailers
