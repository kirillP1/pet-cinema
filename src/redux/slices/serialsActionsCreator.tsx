import {
	Filter,
	MovieFields,
	SORT_TYPE,
} from '@openmoviedb/kinopoiskdev_client'
import { activeSortType } from '../../@types/filtersInterfaces'
import {} from '../../data/filmsLocalData'
import { getKinopoisk } from '../../utils/kinopoisk'
import { AppDispatch } from '../store'
import {
	serialsFetching,
	serialsFetchingError,
	serialsFetchingSuccess,
} from './serialsSlice'

const { kp, queryBuilder } = getKinopoisk()

export const fetchSerials =
	(
		year?: string,
		genre?: string,
		country?: string,
		activeSortType?: activeSortType,
		pagination?: number
	) =>
	async (dispatch: AppDispatch) => {
		try {
			dispatch(serialsFetching())
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
					'ageRating',
				],
				// Добавляем фильтр поиска по указанному диапазону рейтинга

				'rating.kp': '7.5-10',
				// Добавляем фильтр для поиска фильмов с постером
				'poster.url': '!null',

				type: 'tv-series',
				page: pagination,
				limit: 12,
			}
			genre = genre?.toLowerCase()
			console.log(
				'Годы: ' + year,
				'Жанры: ' + genre,
				'Страны: ' + country,
				'Pagination: ' + pagination
			)
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

			if (data) {
				dispatch(serialsFetchingSuccess(data?.docs))
			}
		} catch (e: any | unknown) {
			dispatch(serialsFetchingError(e))
		}
	}
