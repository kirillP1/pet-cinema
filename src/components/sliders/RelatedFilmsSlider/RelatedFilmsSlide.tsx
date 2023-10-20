import { FC } from 'react'
import { Link } from 'react-router-dom'
type typeRelatedFilmsSlide = {
	item: any
}
const RelatedFilmsSlide: FC<typeRelatedFilmsSlide> = ({ item }) => {
	return (
		<>
			<div
				className='relatedFilmsSlider__layer'
				style={{
					backgroundImage: `url(${item.poster.url})`,
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
