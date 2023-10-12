import { MovieQueryBuilder } from '@openmoviedb/kinopoiskdev_client'
import { getKinopoisk } from '../../utils/kinopoisk'
import { AppDispatch } from '../store'
import { setSearchData } from './filtersSlice'

const { kp, queryBuilder } = getKinopoisk()
export const getSearchData =
	(searchValue: string) => async (dispatch: AppDispatch) => {
		if (searchValue.length > 0) {
			const queryBuilder = new MovieQueryBuilder()
			// Создаем запрос для поиска фильмов по подходящих под наш запрос
			const query = queryBuilder
				// Указываем что хотим получить фильм под названием Аватар вышедший в 2022
				.query(searchValue)
				.build()
			const { data, error, message } = await kp.movie.getBySearchQuery(query)

			if (data) {
				dispatch(setSearchData(data.docs))
				console.log('getSearchData', data.docs)
			}
		} else {
			dispatch(setSearchData([]))
			console.log(' none')
		}
	}
