import { FC, useEffect, useState } from 'react'
import { IFilms } from '../../data/filmsLocalData'
import BannerButton from '../buttons/BannerButton'
type typeFilmSingleBanner = {
	film: IFilms
}

const FilmSingleBanner: FC<typeFilmSingleBanner> = ({ film }) => {
	const [scrollTop, setScrollTop] = useState<number>(0)

	useEffect(() => {
		window.addEventListener('scroll', e => {
			setScrollTop(window.scrollY)
		})
	}, [])
	console.log('FilmSingleBanner', film)

	return (
		<div className='filmSingleBanner'>
			<div
				className='filmSingleBanner__background'
				style={{
					transform: `translate3d(0, calc((${scrollTop}px) / 3.6), 0)`,
					background: `url(${film.backdrop && film.backdrop.url}) no-repeat`,
				}}
			>
				{/*film.videos.trailers[0] && (
					<div className='filmSingleBanner__background-wrapper'>
						<iframe
							src={
								film.videos.trailers[0].url +
								'?rel=0&version=3&autoplay=1&mute=1&autohide=1&showinfo=0&controls=0&loop=1'
							}
							allow='autoplay; encrypted-media'
							width={'100%'}
							height={'100%'}
						></iframe>
					</div>
						)*/}
			</div>
			<div
				className='filmSingleBanner__content active filmSingleBanner__element'
				style={{
					transform: `translate3d(0, calc((${scrollTop}px) / 5.7), 0)`,
				}}
			>
				<h2 className='filmSingleBanner__content-title'>
					{film.logo?.url ? (
						<img src={film.logo && film.logo?.url} alt={film.name} />
					) : (
						film.name
					)}
				</h2>
				<div className='filmSingleBanner__content-buttons '>
					<BannerButton film={film} />
				</div>
			</div>

			<div
				className='filmSingleBanner__persons active filmSingleBanner__element'
				style={{
					transform: `translate3d(0, calc((${scrollTop}px) / 5.7), 0)`,
				}}
			>
				{film.persons?.slice(0, 5).map(person => (
					<div className='filmSingleBanner__item'>
						<div
							style={{ background: `url(${person.photo}) no-repeat` }}
							className='filmSingleBanner__item-img'
						/>
						<h4 className='filmSingleBanner__item-name'>{person.name}</h4>
						<div className='filmSingleBanner__item-profession'>
							{person.profession}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default FilmSingleBanner
