import { serialsFilterData } from '../data/serialsFiltersData'
import {
	getCountriesAll,
	getGenresAll,
} from '../redux/slices/films/filmsActionsCreators'
import { fetchSerials } from '../redux/slices/serials/serialsActionsCreator'
import { AppDispatch } from '../redux/store'

export const updateFetchSerials = (serialFilters: any) => {
	return fetchSerials(
		serialFilters.filters.years.active,
		serialFilters.filters.genres.active,
		serialFilters.filters.countries.active,
		serialFilters.activeSortType,
		serialFilters.pagination
	)
}
export const updateSerialsFilters = (serialFilters: any) => {
	serialsFilterData[0].all = [
		'Все страны',
		...serialFilters.filters.countries.all,
	]
	serialsFilterData[1].all = ['Все жанры', ...serialFilters.filters.genres.all]
	serialsFilterData[2].all = serialFilters.filters.years.all
}
export const getSerialFilters = (dispatch: AppDispatch) => {
	dispatch(getGenresAll)
	dispatch(getCountriesAll)
}
