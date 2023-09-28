import FilmFilters from '../components/filters/FilmFilters'
import FilmSort from '../components/sorts/FilmSort'
import { useAppSelector } from '../hooks/redux'

const Films = () => {
	const { items } = useAppSelector(state => state.films)

	return (
		<div className='films'>
			<div className='films__container'>
				<FilmFilters />

				<div className='films__items-wrapper'>
					<FilmSort />
					<div className='films__items'>
						{items.map((item: any, index: number) => (
							<div
								className='films__items-item'
								key={index}
								style={{
									background: `url(${item.poster.previewUrl}) no-repeat`,
								}}
							></div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Films
