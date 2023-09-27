import { Filter, MovieFields } from '@openmoviedb/kinopoiskdev_client'
import { headerSliderSlides } from '../../data/headerSliderSlides'
import { getKinopoisk } from '../../utils/kinopoisk'
import { AppDispatch } from '../store'
import {
	filmsFetching,
	filmsFetchingError,
	filmsFetchingSuccess,
} from './filmsSlice'
import {
	activeSortType,
	setCountriesAll,
	setGenresAll,
	setYearsAll,
} from './filterSlice'

const { kp, queryBuilder } = getKinopoisk()
console.log('wrapper kino', kp, queryBuilder)

export const fetchFilms =
	(
		year?: string,
		genre?: string,
		country?: string,
		activeSortType?: activeSortType
	) =>
	async (dispatch: AppDispatch) => {
		try {
			dispatch(filmsFetching())
			// Не работает фильтрация
			let query: Filter<MovieFields> = {
				selectFields: [
					'id',
					'name',
					'rating',
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
				],
				type: 'movie',
				page: 1,
				limit: 30,
			}
			genre = genre?.toLowerCase()
			console.log('Годы: ' + year, 'Жанры: ' + genre, 'Страны: ' + country)
			genre?.toLowerCase() !== 'все жанры' && (query['genres.name'] = genre)
			country?.toLowerCase() !== 'все страны' &&
				(query['countries.name'] = country)
			year?.toLowerCase() !== 'все годы' && (query.year = year)

			/*if (activeSortType?.sort === sortEnum.RATING) {
				query.sortField = 'raiting.kp'
			} else if (activeSortType?.sort === sortEnum.NAME) {
				query.sortField = 'name'
			}*/

			const { data, error, message } = await kp.movie.getByFilters(query)

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
		dispatch(setGenresAll(data.map(item => item.name.toString())))
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
		dispatch(setCountriesAll(data.map(item => item.name.toString())))
	}

	// Если будет ошибка, то выведем ее в консоль
	console.log(error, message)
}

export const getYearsAll = async (dispatch: AppDispatch) => {
	// Отправляем запрос на получение годов
	const { data, error, message } = await kp.movie.getPossibleValuesByField(
		'year'
	)

	if (data) {
		console.log(data)
		dispatch(setYearsAll(data.map(item => item.name.toString())))
	}

	// Если будет ошибка, то выведем ее в консоль
	console.log(error, message)
}
