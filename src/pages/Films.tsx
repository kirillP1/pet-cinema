import { useEffect } from 'react'
import FilmCard from '../components/cards/FilmCard'
import FilmFilters from '../components/filters/FilmFilters'
import FilmsSkeleton from '../components/skeletons/FilmsSkeleton'
import FilmSort from '../components/sorts/FilmSort'
import { IFilms } from '../data/filmsLocalData'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchFilms } from '../redux/slices/filmsActionsCreators'
import { statusLoadingEnum } from '../redux/slices/filmsSlice'

const Films = () => {
	const { items, status } = useAppSelector(state => state.films)
	const dispath = useAppDispatch()
	useEffect(() => {
		dispath(fetchFilms())
	}, [])
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
				</div>
			</div>
		</div>
	)
}

export default Films
