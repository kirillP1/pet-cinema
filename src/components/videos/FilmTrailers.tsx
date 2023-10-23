import { MovieDtoV13, Video } from '@openmoviedb/kinopoiskdev_client'
import { FC } from 'react'
import { IFilms, ITrailer } from '../../data/filmsLocalData'

type typeFilmSingleBanner = {
	film: IFilms | MovieDtoV13
}

const FilmTrailers: FC<typeFilmSingleBanner> = ({ film }) => {
	return (
		<>
			{film.videos && film.videos.trailers && film.videos.trailers[0] && (
				<div className='filmTrailers' id='trailers'>
					<h2 className='filmTrailers__header'>Трейлеры</h2>
					<div className='filmTrailers__items'>
						{film.videos.trailers.map(
							(trailer: Video | ITrailer, index: number) => (
								<div className='filmTrailers__item' key={index}>
									<iframe
										src={trailer.url && trailer.url}
										allow='autoplay; encrypted-media'
										width={'100%'}
										height={'100%'}
									></iframe>
								</div>
							)
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default FilmTrailers
