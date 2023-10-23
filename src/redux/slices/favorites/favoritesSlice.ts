import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IFilms } from '../../../data/filmsLocalData'
import { getFavoritesFromLS } from './favoriteActionsCreators'
const favoritesData: IFilms[] | MovieDtoV13[] = getFavoritesFromLS()
type typeFavoritesSlice = {
	items: any
}
const initialState: typeFavoritesSlice = {
	items: favoritesData,
}

const favoritesSlice = createSlice({
	name: 'favoritesSlice',
	initialState,
	reducers: {
		addFavoritesItem: (state, action: PayloadAction<IFilms | MovieDtoV13>) => {
			console.log(
				'inc',
				state.items.includes(action.payload),
				'action',
				action.payload
			)
			state.items.forEach((item: IFilms | MovieDtoV13, index: number) => {
				console.log('state ' + index, item)
			})
			state.items = state.items.filter(
				(obj: IFilms | MovieDtoV13) => obj.id !== action.payload.id
			)
			if (state.items[0]) {
				const json = JSON.stringify([action.payload, ...state.items])
				localStorage.setItem('favorites', json)
			} else {
				const json = JSON.stringify(action.payload)
				localStorage.setItem('favorites', json)
			}

			state.items.push(action.payload)
			console.log('addFavoritesItem', state.items)
		},
		removeFavoritesItem: (
			state,
			action: PayloadAction<IFilms | MovieDtoV13>
		) => {
			console.log('in removeFavoritesItem', state.items, action.payload)

			state.items = state.items.filter(
				(obj: IFilms | MovieDtoV13) => obj.id !== action.payload.id
			)
			console.log(state.items)

			const json = JSON.stringify(state.items)
			localStorage.setItem('favorites', json)
		},
	},
})

export const { addFavoritesItem, removeFavoritesItem } = favoritesSlice.actions
export default favoritesSlice.reducer
