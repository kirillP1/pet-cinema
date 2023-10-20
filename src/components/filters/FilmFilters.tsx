import React, { FC, useEffect } from 'react'
import { filmsFilterData } from '../../data/filmFiltersData'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
	getFilmFilters,
	updateFilmsFilters,
} from '../../utils/updateFetchFilms'
import FilmFilter from './FilmFilter'

const FilmFilters: FC = () => {
	const dispatch = useAppDispatch()
	const filmFilters = useAppSelector(state => state.filmFilters)

	useEffect(() => {
		getFilmFilters(dispatch)
	}, [])

	useEffect(() => {
		updateFilmsFilters(filmFilters)
	}, [filmFilters])

	return (
		<div className='films__filters'>
			{filmsFilterData.map((item, index) => (
				<FilmFilter key={index} item={item} />
			))}
		</div>
	)
}

export default React.memo(FilmFilters)
