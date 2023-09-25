import {
	Filter,
	KinopoiskDev,
	MovieFields,
	MovieQueryBuilder,
} from '@openmoviedb/kinopoiskdev_client'
import { AppDispatch } from '../store'
import {
	kinopoisFetching,
	kinopoisFetchingError,
	kinopoisFetchingSuccess,
} from './kinopoiskSlice'

export const fetchKinopoisk =
	(selectItems: string[]) => async (dispatch: AppDispatch) => {
		try {
			console.log(selectItems)

			dispatch(kinopoisFetching())
			const kp = new KinopoiskDev('1GC0C84-5Y14HKD-G1CAPDX-NHMR5YP')
			const queryBuilder = new MovieQueryBuilder()
			// Не работает фильтрация
			const query: Filter<MovieFields> = {
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
				],
				year: '2010-2023',
				'rating.kp': '7-10',
				page: 1,
				limit: 10,
			}

			const { data, error, message } = await kp.movie.getByFilters(query)
			if (data) {
				dispatch(kinopoisFetchingSuccess(data?.docs))
			}
		} catch (e: any | unknown) {
			dispatch(kinopoisFetchingError(e))
		}
	}
