import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import {} from 'redux'
import filterSlice, {
	setCountry,
	setGenre,
	setYear,
} from '../redux/slices/filterSlice'

const filter = filterSlice
console.log(filter)

export interface IFilmFilterData {
	title: string
	placeholder: string
	all: string[]
	action: ActionCreatorWithPayload<string>
}
export const filmFilterData: IFilmFilterData[] = [
	{
		title: 'Страны',
		placeholder: 'Все страны',
		all: [],
		action: setCountry,
	},
	{
		title: 'Жанры',
		placeholder: 'Все жанры',
		all: [],
		action: setGenre,
	},
	{
		title: 'Годы',
		placeholder: 'Все годы',
		all: [],
		action: setYear,
	},
]
