import { FC } from 'react'
import ContentLoader from 'react-content-loader'

const FilmsSkeleton: FC = props => {
	return (
		<ContentLoader
			speed={2}
			width={185}
			height={280}
			viewBox='0 0 185 280'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
			className='films__items-item'
			{...props}
		>
			<rect x='0' y='0' rx='3' ry='3' width='185' height='280' />
		</ContentLoader>
	)
}

export default FilmsSkeleton
