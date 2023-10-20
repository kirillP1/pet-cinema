import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { AppDispatch } from '../redux/store'

export const handleModalClick = (
	rootRef: any,
	setIsOpen: (a: boolean) => void
) => {
	const handleClick = (event: MouseEvent) => {
		const { target } = event
		if (rootRef) {
			if (target instanceof Node && !rootRef.current?.contains(target)) {
				setIsOpen(false)
			}
		}
	}

	window.addEventListener('click', handleClick)

	return () => {
		window.removeEventListener('click', handleClick)
	}
}

export const onModalOptionClick = (
	item: any,
	setSelected: (item: any) => void,
	action: ActionCreatorWithPayload<any>,
	setIsOpenSort: (a: boolean) => void,
	dispatch: AppDispatch
) => {
	setSelected(item)
	dispatch(action(item))
	setIsOpenSort(false)
}
