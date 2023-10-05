import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { IFilms } from '../../data/filmsLocalData'
type typeFilmSingleBanner = {
	film: IFilms
}
const FilmVideos: FC<typeFilmSingleBanner> = ({ film }) => {
	const [player, setPlayer] = useState<any>()
	const [activePlayer, setActivePlayer] = useState<number>(1)
	useEffect(() => {
		async function fetchPlayer() {
			const res = await axios.get(
				'https://kinobox.tv/api/players/main?kinopoisk=' + film.id
			)
			const data: any[] = res.data
			setPlayer(data)
			console.log(res)
		}

		fetchPlayer()
	}, [])
	console.log(film)

	return (
		<div className='filmVideos'>
			<div className='filmVideos__player'>
				{!player ? (
					<>Загрузка...</>
				) : (
					<>
						<div className='filmVideos__player-tabs'>
							{player.map((item: any, index: number) => (
								<div
									className={
										'filmVideos__player-tab ' +
										(activePlayer === index + 1 ? 'active' : '')
									}
									onClick={() => setActivePlayer(index + 1)}
								>
									Плеер {index + 1}
								</div>
							))}
						</div>
						<div className='filmVideos__player-items'>
							{player.map((item: any, index: number) => (
								<div
									className={
										'filmVideos__player-item ' +
										(activePlayer === index + 1 ? 'active' : '')
									}
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

				{film.videos.trailers[0] && (
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
