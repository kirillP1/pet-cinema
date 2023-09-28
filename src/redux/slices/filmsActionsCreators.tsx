import {
	Filter,
	MovieFields,
	SORT_TYPE,
} from '@openmoviedb/kinopoiskdev_client'
import { activeSortType } from '../../@types/filtersInterfaces'
import { headerSliderSlides } from '../../data/headerSliderSlides'
import { getKinopoisk } from '../../utils/kinopoisk'
import { AppDispatch } from '../store'
import { setFilmCountriesAll, setFilmGenresAll } from './filmFiltersSlice'
import {
	filmsFetching,
	filmsFetchingError,
	filmsFetchingSuccess,
} from './filmsSlice'

const { kp, queryBuilder } = getKinopoisk()

export const fetchFilms =
	(
		year?: string,
		genre?: string,
		country?: string,
		activeSortType?: activeSortType
	) =>
	async (dispatch: AppDispatch) => {
		console.log('Start Film Fetch')

		try {
			dispatch(filmsFetching())
			// Не работает фильтрация
			let query: Filter<MovieFields> = {
				selectFields: [
					'id',
					'name',
					'rating',
					'votes',
					'poster',
					'year',
					'backdrop',
					'logo',
					'ageLimit',
					'movieLength',
					'genres',
					'shortDescription',
					'videos',
					'countries',
					'ag',
				],
				// Добавляем фильтр поиска по указанному диапазону рейтинга

				'rating.kp': '7.5-10',
				// Добавляем фильтр для поиска фильмов с постером
				'poster.url': '!null',

				type: 'movie',
				page: 1,
				limit: 30,
			}
			genre = genre?.toLowerCase()
			console.log('Годы: ' + year, 'Жанры: ' + genre, 'Страны: ' + country)
			genre?.toLowerCase() !== 'все жанры' &&
				genre &&
				(query['genres.name'] = genre)
			country?.toLowerCase() !== 'все страны' &&
				country &&
				(query['countries.name'] = country)
			year?.toLowerCase() !== 'все годы' && year && (query.year = year)
			if (activeSortType) {
				query.sortField = activeSortType?.sort
				query.sortType = SORT_TYPE.DESC
			}
			const { data, error, message } = await kp.movie.getByFilters(query)
			console.log('action data:', data, 'query: ', query)

			if (data) {
				dispatch(filmsFetchingSuccess(data?.docs))
			} else {
				dispatch(filmsFetchingSuccess(headerSliderSlides))
			}
		} catch (e: any | unknown) {
			dispatch(filmsFetchingError(e))
		}
	}

export const getGenresAll = async (dispatch: AppDispatch) => {
	// Отправляем запрос на получение жанров
	const { data, error, message } = await kp.movie.getPossibleValuesByField(
		'genres.name'
	)

	if (data) {
		dispatch(setFilmGenresAll(data.map(item => item.name.toString())))
	}

	// Если будет ошибка, то выведем ее в консоль
	console.log(error, message)
}

export const getCountriesAll = async (dispatch: AppDispatch) => {
	// Отправляем запрос на получение стран
	const { data, error, message } = await kp.movie.getPossibleValuesByField(
		'countries.name'
	)

	if (data) {
		dispatch(setFilmCountriesAll(data.map(item => item.name.toString())))
	}

	// Если будет ошибка, то выведем ее в консоль
	console.log(error, message)
}
