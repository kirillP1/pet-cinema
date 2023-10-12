import { FC, useEffect } from 'react'
import FilmCard from '../components/cards/FilmCard'
import FilmFilters from '../components/filters/FilmFilters'
import FilmPagination from '../components/paginations/FilmPagination'
import FilmsSkeleton from '../components/skeletons/FilmsSkeleton'
import FilmSort from '../components/sorts/FilmSort'
import { IFilms } from '../data/filmsLocalData'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchFilms } from '../redux/slices/filmsActionsCreators'
import { statusLoadingEnum } from '../redux/slices/serialsSlice'

const Films: FC = () => {
	const { items, status } = useAppSelector(state => state.films)
	const filmFilters = useAppSelector(state => state.filmFilters)
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(
			fetchFilms(
				filmFilters.filters.years.active,
				filmFilters.filters.genres.active,
				filmFilters.filters.countries.active,
				filmFilters.activeSortType,
				filmFilters.pagination
			)
		)
	}, [filmFilters])
	console.log(items, status)

	return (
		<div className='films'>
			<div className='films__container'>
				{<FilmFilters />}

				<div className='films__items-wrapper'>
					<FilmSort />
					<div className='films__items'>
						{items.map((item: IFilms, index: number) =>
							status === statusLoadingEnum.LOADING ||
							status === statusLoadingEnum.ERROR ? (
								<FilmsSkeleton key={index} />
							) : (
								<FilmCard item={item} key={index} />
							)
						)}
					</div>
					<FilmPagination />
				</div>
			</div>
		</div>
	)
}

export default Films
