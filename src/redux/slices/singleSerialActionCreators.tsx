import { getKinopoisk } from '../../utils/kinopoisk'
import { AppDispatch } from '../store'
import {
	singleSerialFetching,
	singleSerialFetchingError,
	singleSerialFetchingSuccess,
} from './singleSerialSlice'
const { kp, queryBuilder } = getKinopoisk()
export const fetchSingleSerial =
	(id: number) => async (dispatch: AppDispatch) => {
		try {
			dispatch(singleSerialFetching())
			// Не работает фильтрация

			const { data, error, message } = await kp.movie.getById(id)
			console.log('action data:', data)

			if (data) {
				dispatch(singleSerialFetchingSuccess(data))
				console.log('fetch', data)
			}
		} catch (e: any | unknown) {
			dispatch(singleSerialFetchingError(e))
		}
	}
