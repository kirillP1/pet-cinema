import { filmsLocalData } from '../../../data/filmsLocalData'
import favoritesReducer, {
	addFavoritesItem,
	removeFavoritesItem,
} from './favoritesSlice' // Замените 'yourSlice' на путь к вашему Redux slice

describe('favoritesSlice', () => {
	test('should add an item to favorites', () => {
		const initialState = {
			items: [],
		}
		const itemToAdd = filmsLocalData[0]

		const newState = favoritesReducer(initialState, addFavoritesItem(itemToAdd))

		// Проверяем, что элемент был добавлен
		expect(newState.items).toContainEqual(itemToAdd)
	})

	test('should remove an item from favorites', () => {
		const itemToRemove = filmsLocalData[0]
		const initialState = {
			items: [itemToRemove],
		}

		const newState = favoritesReducer(
			initialState,
			removeFavoritesItem(itemToRemove)
		)

		// Проверяем, что элемент был удален
		expect(newState.items).not.toContainEqual(itemToRemove)
	})
})
