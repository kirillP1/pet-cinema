import { FC, useEffect } from 'react'
import { serialsFilterData } from '../../data/serialsFiltersData'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
	getCountriesAll,
	getGenresAll,
} from '../../redux/slices/filmsActionsCreators'
import { fetchSerials } from '../../redux/slices/serialsActionsCreator'

const SerialFilters: FC = () => {
	const dispatch = useAppDispatch()
	const serialFilters = useAppSelector(state => state.serialFilters)

	useEffect(() => {
		dispatch(getGenresAll)
		dispatch(getCountriesAll)
	}, [])

	useEffect(() => {
		serialsFilterData[0].all = serialFilters.filters.countries.all
		serialsFilterData[1].all = serialFilters.filters.genres.all
		serialsFilterData[2].all = serialFilters.filters.years.all
	}, [])

	useEffect(() => {
		dispatch(fetchSerials())
	}, [serialFilters])

	return <div className='serials__filters'></div>
}

export default SerialFilters
