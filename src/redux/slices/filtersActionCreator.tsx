import { MovieQueryBuilder } from '@openmoviedb/kinopoiskdev_client'
import { getKinopoisk } from '../../utils/kinopoisk'
import { AppDispatch } from '../store'
import {
	searchFetching,
	searchFetchingError,
	searchFetchingSuccess,
} from './filtersSlice'

const { kp, queryBuilder } = getKinopoisk()
export const getSearchData =
	(searchValue: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(searchFetching())
			const queryBuilder = new MovieQueryBuilder()
			// Создаем запрос для поиска фильмов по подходящих под наш запрос
			const query = queryBuilder
				// Указываем что хотим получить фильм под названием Аватар вышедший в 2022
				.query(searchValue)
				.build()
			const { data, error, message } = await kp.movie.getBySearchQuery(query)

			if (data) {
				dispatch(searchFetchingSuccess(data.docs))
				console.log('getSearchData', data.docs)
			}
		} catch (e: any | unknown) {
			dispatch(searchFetchingError(e))
			console.log(' none')
		}
	}
