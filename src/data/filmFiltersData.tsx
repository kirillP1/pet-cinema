import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import {} from 'redux'
import { activeSortType, sortEnum } from '../@types/filtersInterfaces'
import {
	setFilmCountry,
	setFilmGenre,
	setFilmYear,
} from '../redux/slices/filmFiltersSlice'

export interface IFilmsFilterData {
	title: string
	placeholder: string
	all: string[]
	action: ActionCreatorWithPayload<string>
}
export const filmsFilterData: IFilmsFilterData[] = [
	{
		title: 'Страны',
		placeholder: 'Все страны',
		all: [],
		action: setFilmCountry,
	},
	{
		title: 'Жанры',
		placeholder: 'Все жанры',
		all: [],
		action: setFilmGenre,
	},
	{
		title: 'Годы',
		placeholder: 'Все годы',
		all: [],
		action: setFilmYear,
	},
]

export const sortFilmList: activeSortType[] = [
	{ sortName: 'По популярности', sort: sortEnum.POPULARITY },
	{ sortName: 'По алфавиту', sort: sortEnum.NAME },
	{ sortName: 'По рейтингу', sort: sortEnum.RATING },
]
