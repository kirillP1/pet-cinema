import { getKinopoisk } from '../../../utils/kinopoisk'
import { AppDispatch } from '../../store'
import {
	singleFilmFetching,
	singleFilmFetchingError,
	singleFilmFetchingSuccess,
} from './singleFilmSlice'

const { kp, queryBuilder } = getKinopoisk()
export const fetchSingleFilm =
	(id: number) => async (dispatch: AppDispatch) => {
		try {
			dispatch(singleFilmFetching())
			// Не работает фильтрация

			const { data, error, message } = await kp.movie.getById(id)
			console.log('action data:', data)

			if (data) {
				dispatch(singleFilmFetchingSuccess(data))
			}
		} catch (e: any | unknown) {
			dispatch(singleFilmFetchingError(e))
		}
	}
