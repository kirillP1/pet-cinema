import { LinkedMovie } from '@openmoviedb/kinopoiskdev_client'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IFilms } from '../../../data/filmsLocalData'
type typeRelatedFilmsSlide = {
	item: LinkedMovie | IFilms
}
const RelatedFilmsSlide: FC<typeRelatedFilmsSlide> = ({ item }) => {
	return (
		<>
			<div
				className='relatedFilmsSlider__layer'
				style={{
					backgroundImage: `url(${item.poster && item.poster.url})`,
				}}
			></div>
			<canvas
				className='particles relatedFilmsSlider__layer'
				data-color='#BE9164'
			></canvas>
			<Link
				to={'/films/' + item.id}
				className='relatedFilmsSlider__layer relatedFilmsSlider__text-wrapper'
			>
				<div className='relatedFilmsSlider__text'>
					<div className='relatedFilmsSlider__title'>{item.name}</div>
				</div>
			</Link>
		</>
	)
}

export default RelatedFilmsSlide
