import { FC } from 'react'
import SerialFilters from '../components/filters/SerialFilters'
import FilmsSkeleton from '../components/skeletons/FilmsSkeleton'
import SerialSort from '../components/sorts/SerialSort'
import { useAppSelector } from '../hooks/redux'
import { statusLoadingEnum } from '../redux/slices/filmsSlice'

const Serials: FC = () => {
	const { items, status } = useAppSelector(state => state.serials)
	console.log(items)

	return (
		<div className='serials'>
			<div className='serials__container'>
				<SerialFilters />

				<div className='serials__items-wrapper'>
					<SerialSort />
					<div className='serials__items'>
						{items.map((item: any, index: number) =>
							status === statusLoadingEnum.LOADING ||
							status === statusLoadingEnum.ERROR ? (
								<FilmsSkeleton key={index} />
							) : (
								<div
									className='serials__items-item'
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

export default Serials
