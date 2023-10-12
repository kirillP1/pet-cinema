import { FC, useEffect } from 'react'
import { filmsFilterData } from '../../data/filmFiltersData'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
	getCountriesAll,
	getGenresAll,
} from '../../redux/slices/filmsActionsCreators'
import FilmFilter from './FilmFilter'

const FilmFilters: FC = () => {
	const dispatch = useAppDispatch()
	const filmFilters = useAppSelector(state => state.filmFilters)

	useEffect(() => {
		dispatch(getGenresAll)
		dispatch(getCountriesAll)
	}, [])

	useEffect(() => {
		filmsFilterData[0].all = [
			'Все страны',
			...filmFilters.filters.countries.all,
		]
		filmsFilterData[1].all = ['Все жанры', ...filmFilters.filters.genres.all]
		filmsFilterData[2].all = filmFilters.filters.years.all
	}, [filmFilters])

	return (
		<div className='films__filters'>
			{filmsFilterData.map((item, index) => (
				<FilmFilter key={index} item={item} />
			))}
		</div>
	)
}

export default FilmFilters
