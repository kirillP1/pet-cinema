import { Filter, MovieFields } from '@openmoviedb/kinopoiskdev_client'
import { getKinopoisk } from './kinopoisk'
const { kp, queryBuilder } = getKinopoisk()
export const fetchPersonsFilms = async (person: string) => {
	try {
		// Не работает фильтрация
		let query: Filter<MovieFields> = {
			//                           Добавляем фильтр поиска по указанному диапазону рейтинга
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
			'rating.kp': '7.5-10',
			// Добавляем фильтр для поиска фильмов с постером
			'poster.url': '!null',
			name: '!null',
			'persons.name': person,
			limit: 100,
		}
		const { data, error, message } = await kp.movie.getByFilters(query)
		console.log('action data:', data, 'query: ', query, 'page: ', query.page)
		return data?.docs
	} catch (e: any | unknown) {
		console.log('homeSliders Error')
	}
}
export const fetchGenreFilms = async (genre: string) => {
	try {
		// Не работает фильтрация
		let query: Filter<MovieFields> = {
			//                           Добавляем фильтр поиска по указанному диапазону рейтинга
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
			'rating.kp': '7.5-10',
			// Добавляем фильтр для поиска фильмов с постером
			'poster.url': '!null',
			name: '!null',
			limit: 50,
		}
		query['genres.name'] = genre
		const { data, error, message } = await kp.movie.getByFilters(query)
		console.log('action data:', data, 'query: ', query, 'page: ', query.page)
		return data?.docs
	} catch (e: any | unknown) {
		console.log('homeSliders Error')
	}
}
