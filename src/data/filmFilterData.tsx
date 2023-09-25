import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { setGenre, setYear } from '../redux/slices/filterSlice'

export interface IFilmFilterData {
	title: string
	placeholder: string
	options: string[]
	action: ActionCreatorWithPayload<string>
}
export const filmFilterData: IFilmFilterData[] = [
	{
		title: 'Страны',
		placeholder: 'Все страны',
		options: ['Все страны', 'Россия', 'СССР', 'США', 'Франция', 'Италия'],
		action: setYear,
	},
	{
		title: 'Жанры',
		placeholder: 'Все жанры',
		options: [
			'Все жанры',
			'Аниме',
			'Биография',
			'Боевик',
			'Вестерн',
			'Военный',
			'Ужасы',
			'Комедия',
		],
		action: setGenre,
	},
	{
		title: 'Годы',
		placeholder: 'Все годы',
		options: [
			'Все годы',
			'2020-2023',
			'2010-2019',
			'2000-2009',
			'1990-1999',
			'1980-1989',
		],
		action: setYear,
	},
]
