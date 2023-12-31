import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import { FC, useEffect } from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import FilmCard from '../components/cards/FilmCard'
import FilmFilters from '../components/filters/FilmFilters'
import FilmPagination from '../components/paginations/FilmPagination'
import FilmsSkeleton from '../components/skeletons/FilmsSkeleton'
import FilmSort from '../components/sorts/FilmSort'
import { IFilms } from '../data/filmsLocalData'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { updateFetchFilms } from '../utils/updateFetchFilms'

const Films: FC = () => {
	const { items } = useAppSelector(state => state.films)
	const filmFilters = useAppSelector(state => state.filmFilters)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(updateFetchFilms(filmFilters))
	}, [filmFilters])

	return (
		<div className='films'>
			<div className='films__container'>
				<FilmFilters />

				<div className='films__items-wrapper'>
					<FilmSort />
					<div className='films__items'>
						{items.map((item: IFilms | MovieDtoV13, index: number) => (
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
