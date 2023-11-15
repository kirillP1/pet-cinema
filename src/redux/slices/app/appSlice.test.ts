import appReducer, { resize } from './appSlice' // Замените 'yourSlice' на путь к вашему Redux slice

describe('appSlice', () => {
	it('should handle the resize action', () => {
		const initialState = { width: 0 }
		const widthToSet = 500 // Значение, которое вы хотите установить

		// Вызываем редюсер с начальным состоянием и действием resize
		const newState = appReducer(initialState, resize(widthToSet))

		// Проверяем, что ширина в новом состоянии установлена правильно
		expect(newState.width).toEqual(widthToSet)
	})
})
