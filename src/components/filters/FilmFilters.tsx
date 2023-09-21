import { FC } from 'react'
import { filmFilterData } from '../../data/filmFilterData'
import FilmFilter from './FilmFilter'

const FilmFilters: FC = () => {
	return (
		<div className='films__filters'>
			{filmFilterData.map(item => (
				<FilmFilter item={item} />
			))}
		</div>
	)
}

export default FilmFilters
