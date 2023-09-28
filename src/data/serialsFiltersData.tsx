import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import {
	setSerialCountry,
	setSerialGenre,
	setSerialYear,
} from '../redux/slices/serialFiltersSlice'

export interface ISerialsFilterData {
	title: string
	placeholder: string
	all: string[]
	action: ActionCreatorWithPayload<string>
}

export const serialsFilterData: ISerialsFilterData[] = [
	{
		title: 'Страны',
		placeholder: 'Все страны',
		all: [],
		action: setSerialCountry,
	},
	{
		title: 'Жанры',
		placeholder: 'Все жанры',
		all: [],
		action: setSerialGenre,
	},
	{
		title: 'Годы',
		placeholder: 'Все годы',
		all: [],
		action: setSerialYear,
	},
]
