import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getFavoritesFromLS } from './favoriteActionsCreators'
const favoritesData = getFavoritesFromLS()
const initialState = {
	items: <any>favoritesData,
}

const favoritesSlice = createSlice({
	name: 'favoritesSlice',
	initialState,
	reducers: {
		addFavoritesItem: (state, action: PayloadAction<any>) => {
			console.log(
				'inc',
				state.items.includes(action.payload),
				'action',
				action.payload
			)
			state.items.forEach((item: any, index: number) => {
				console.log('state ' + index, item)
			})
			state.items = state.items.filter(
				(obj: any) => obj.id !== action.payload.id
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
		removeFavoritesItem: (state, action: PayloadAction<any>) => {
			console.log('in removeFavoritesItem', state.items, action.payload)

			state.items = state.items.filter(
				(obj: any) => obj.id !== action.payload.id
			)
			console.log(state.items)

			const json = JSON.stringify(state.items)
			localStorage.setItem('favorites', json)
		},
	},
})

export const { addFavoritesItem, removeFavoritesItem } = favoritesSlice.actions
export default favoritesSlice.reducer
