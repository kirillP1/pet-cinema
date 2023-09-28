import { Filter, MovieFields } from '@openmoviedb/kinopoiskdev_client'
import { headerSliderSlides } from '../../data/headerSliderSlides'
import { getKinopoisk } from '../../utils/kinopoisk'
import { AppDispatch } from '../store'
import {
	serialsFetching,
	serialsFetchingError,
	serialsFetchingSuccess,
} from './serialsSlice'

const { kp, queryBuilder } = getKinopoisk()

export const fetchSerials = () => async (dispatch: AppDispatch) => {
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
			],
			type: 'tv-series',
			page: 1,
			limit: 30,
		}

		const { data, error, message } = await kp.movie.getByFilters(query)

		if (data) {
			dispatch(serialsFetchingSuccess(data?.docs))
		} else {
			dispatch(serialsFetchingSuccess(headerSliderSlides))
		}
	} catch (e: any | unknown) {
		dispatch(serialsFetchingError(e))
	}
}
