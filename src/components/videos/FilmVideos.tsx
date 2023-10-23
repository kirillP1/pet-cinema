import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import { FC, useEffect, useState } from 'react'
import { IFilms, IPlayer } from '../../data/filmsLocalData'
import { fetchPlayer } from '../../utils/fetchPlayer'
type typeFilmSingleBanner = {
	film: IFilms | MovieDtoV13
}
const FilmVideos: FC<typeFilmSingleBanner> = ({ film }) => {
	const [player, setPlayer] = useState<IPlayer[]>()
	const [activePlayer, setActivePlayer] = useState<number>(1)
	useEffect(() => {
		fetchPlayer(film.id, setPlayer)
		console.log(player)
	}, [])

	return (
		<div className='filmVideos'>
			<div className='filmVideos__player'>
				{!player ? (
					<>Загрузка...</>
				) : (
					<>
						<div className='filmVideos__player-tabs'>
							{player.map((item: IPlayer, index: number) => (
								<div
									className={
										'filmVideos__player-tab ' +
										(activePlayer === index + 1 ? 'active' : '')
									}
									onClick={() => setActivePlayer(index + 1)}
									key={index}
								>
									Плеер {index + 1}
								</div>
							))}
						</div>
						<div className='filmVideos__player-items'>
							{player.map((item: IPlayer, index: number) => (
								<div
									className={
										'filmVideos__player-item ' +
										(activePlayer === index + 1 ? 'active' : '')
									}
									key={index}
								>
									<iframe src={item.iframeUrl} key={index}></iframe>
								</div>
							))}
						</div>
					</>
				)}
			</div>
			<div className='filmVideos__desc'>
				<a href='#related' className='filmVideos__desc-link'>
					Похожее
				</a>

				{film.videos && film.videos.trailers && film.videos.trailers[0] && (
					<a href='#trailers' className='filmVideos__desc-link'>
						Трейлеры
					</a>
				)}
				<a href='#persons' className='filmVideos__desc-link'>
					Актеры и создатели
				</a>
			</div>
		</div>
	)
}

export default FilmVideos
