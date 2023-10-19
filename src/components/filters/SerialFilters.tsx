import { FC, useEffect } from 'react'
import { serialsFilterData } from '../../data/serialsFiltersData'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
	getCountriesAll,
	getGenresAll,
} from '../../redux/slices/films/filmsActionsCreators'
import SerialFilter from './SerialFilter'

const SerialFilters: FC = () => {
	const dispatch = useAppDispatch()
	const serialFilters = useAppSelector(state => state.serialFilters)

	useEffect(() => {
		dispatch(getGenresAll)
		dispatch(getCountriesAll)
	}, [])

	useEffect(() => {
		serialsFilterData[0].all = [
			'Все страны',
			...serialFilters.filters.countries.all,
		]
		serialsFilterData[1].all = [
			'Все жанры',
			...serialFilters.filters.genres.all,
		]
		serialsFilterData[2].all = serialFilters.filters.years.all
	}, [serialFilters])

	return (
		<div className='serials__filters'>
			{serialsFilterData.map((item, index) => (
				<SerialFilter key={index} item={item} />
			))}
		</div>
	)
}

export default SerialFilters
