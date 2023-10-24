import { resize } from '../redux/slices/app/appSlice'
import { AppDispatch } from '../redux/store'

export const resizeApp = (dispatch: AppDispatch) => {
	function handleWindowResize() {
		dispatch(resize(getWindowSize()))
		console.log('resize', getWindowSize())
	}

	window.addEventListener('resize', handleWindowResize)

	return () => {
		window.removeEventListener('resize', handleWindowResize)
	}
}

function getWindowSize() {
	const { innerWidth } = window
	return innerWidth
}
