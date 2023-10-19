import { FC, useEffect } from 'react'
import SerialCard from '../components/cards/SerialCard'
import SerialFilters from '../components/filters/SerialFilters'
import SerialPagination from '../components/paginations/SerialPagination'
import FilmsSkeleton from '../components/skeletons/FilmsSkeleton'
import SerialSort from '../components/sorts/SerialSort'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchSerials } from '../redux/slices/serials/serialsActionsCreator'
import { statusLoadingEnum } from '../redux/slices/serials/serialsSlice'

const Serials: FC = () => {
	const { items, status } = useAppSelector(state => state.serials)
	const serialFilters = useAppSelector(state => state.serialFilters)
	const dispatch = useAppDispatch()
	console.log(items)
	useEffect(() => {
		dispatch(
			fetchSerials(
				serialFilters.filters.years.active,
				serialFilters.filters.genres.active,
				serialFilters.filters.countries.active,
				serialFilters.activeSortType,
				serialFilters.pagination
			)
		)
	}, [serialFilters])

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
								<SerialCard item={item} />
							)
						)}
					</div>
					<SerialPagination />
				</div>
			</div>
		</div>
	)
}

export default Serials
