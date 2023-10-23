import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import { FC, useEffect } from 'react'
import SerialCard from '../components/cards/SerialCard'
import SerialFilters from '../components/filters/SerialFilters'
import SerialPagination from '../components/paginations/SerialPagination'
import FilmsSkeleton from '../components/skeletons/FilmsSkeleton'
import SerialSort from '../components/sorts/SerialSort'
import { IFilms } from '../data/filmsLocalData'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { statusLoadingEnum } from '../redux/slices/serials/serialsSlice'
import { updateFetchSerials } from '../utils/updateFetchSerials'

const Serials: FC = () => {
	const { items, status } = useAppSelector(state => state.serials)
	const serialFilters = useAppSelector(state => state.serialFilters)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(updateFetchSerials(serialFilters))
	}, [serialFilters])

	return (
		<div className='serials'>
			<div className='serials__container'>
				<SerialFilters />

				<div className='serials__items-wrapper'>
					<SerialSort />
					<div className='serials__items'>
						{items.map((item: IFilms | MovieDtoV13, index: number) =>
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
