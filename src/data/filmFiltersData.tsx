import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import {} from 'redux'
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
