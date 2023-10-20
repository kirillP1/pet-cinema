import { filmsFilterData } from '../data/filmFiltersData'
import {
	fetchFilms,
	getCountriesAll,
	getGenresAll,
} from '../redux/slices/films/filmsActionsCreators'
import { AppDispatch } from '../redux/store'

export const updateFetchFilms = (filmFilters: any) => {
	return fetchFilms(
		filmFilters.filters.years.active,
		filmFilters.filters.genres.active,
		filmFilters.filters.countries.active,
		filmFilters.activeSortType,
		filmFilters.pagination
	)
}

export const updateFilmsFilters = (filmFilters: any) => {
	filmsFilterData[0].all = ['Все страны', ...filmFilters.filters.countries.all]
	filmsFilterData[1].all = ['Все жанры', ...filmFilters.filters.genres.all]
	filmsFilterData[2].all = filmFilters.filters.years.all
}

export const getFilmFilters = (dispatch: AppDispatch) => {
	dispatch(getGenresAll)
	dispatch(getCountriesAll)
}
