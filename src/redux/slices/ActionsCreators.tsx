import {
	Filter,
	KinopoiskDev,
	MovieFields,
	MovieQueryBuilder,
} from '@openmoviedb/kinopoiskdev_client'
import { headerSliderSlides } from '../../data/headerSliderSlides'
import { AppDispatch } from '../store'
import {
	kinopoiskFetching,
	kinopoiskFetchingError,
	kinopoiskFetchingSuccess,
} from './kinopoiskSlice'

export const fetchKinopoisk =
	(year?: string, genre?: string, country?: string) =>
	async (dispatch: AppDispatch) => {
		try {
			genre = genre?.toLowerCase()
			console.log(year, genre)

			dispatch(kinopoiskFetching())
			const kp = new KinopoiskDev('1GC0C84-5Y14HKD-G1CAPDX-NHMR5YP')
			const queryBuilder = new MovieQueryBuilder()
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
				],
				page: 1,
				limit: 30,
			}
			genre !== 'Все жанры' && (query['genres.name'] = genre)
			year !== 'Все годы' && (query.year = year)
			country !== 'Все страны' && (query['countries.name'] = country)

			console.log(query['countries.name'])

			const { data, error, message } = await kp.movie.getByFilters(query)

			console.log(data)

			if (data) {
				dispatch(kinopoiskFetchingSuccess(data?.docs))
			} else {
				dispatch(kinopoiskFetchingSuccess(headerSliderSlides))
			}
		} catch (e: any | unknown) {
			dispatch(kinopoiskFetchingError(e))
		}
	}
