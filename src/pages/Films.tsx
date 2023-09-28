import FilmFilters from '../components/filters/FilmFilters'
import FilmsSkeleton from '../components/skeletons/FilmsSkeleton'
import FilmSort from '../components/sorts/FilmSort'
import { useAppSelector } from '../hooks/redux'
import { statusLoadingEnum } from '../redux/slices/filmsSlice'

const Films = () => {
	const { items, status } = useAppSelector(state => state.films)
	console.log(items, status)

	return (
		<div className='films'>
			<div className='films__container'>
				{<FilmFilters />}

				<div className='films__items-wrapper'>
					<FilmSort />
					<div className='films__items'>
						{items.map((item: any, index: number) =>
							status === statusLoadingEnum.LOADING ||
							status === statusLoadingEnum.ERROR ? (
								<FilmsSkeleton key={index} />
							) : (
								<div
									className='films__items-item'
									key={index}
									style={{
										background: `url(${item.poster.previewUrl}) no-repeat`,
									}}
								></div>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Films
