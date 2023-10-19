import { FC, useEffect } from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import FilmCard from '../components/cards/FilmCard'
import FilmFilters from '../components/filters/FilmFilters'
import FilmPagination from '../components/paginations/FilmPagination'
import FilmsSkeleton from '../components/skeletons/FilmsSkeleton'
import FilmSort from '../components/sorts/FilmSort'
import { IFilms } from '../data/filmsLocalData'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchFilms } from '../redux/slices/films/filmsActionsCreators'

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
						{items.map((item: IFilms, index: number) => (
							<LazyLoadComponent placeholder={<FilmsSkeleton />}>
								<FilmCard item={item} key={index} />
							</LazyLoadComponent>
						))}
					</div>
					<FilmPagination />
				</div>
			</div>
		</div>
	)
}

export default Films
