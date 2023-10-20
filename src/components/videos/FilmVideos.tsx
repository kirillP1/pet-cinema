import { FC, useEffect, useState } from 'react'
import { fetchPlayer } from '../../utils/fetchPlayer'
type typeFilmSingleBanner = {
	film: any
}
const FilmVideos: FC<typeFilmSingleBanner> = ({ film }) => {
	const [player, setPlayer] = useState<any>()
	const [activePlayer, setActivePlayer] = useState<number>(1)
	useEffect(() => {
		fetchPlayer(film.id, setPlayer)
	}, [])

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
									key={index}
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
