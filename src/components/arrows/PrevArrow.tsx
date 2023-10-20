import React, { FC, useState } from 'react'
import { IArrow } from '../../@types/IArrow'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setCountSlide } from '../../redux/slices/home/homeSlice'

const PrevArrow: FC<IArrow> = props => {
	const { className, style, onClick } = props
	const [isDisabled, setIsDisabled] = useState<boolean>(false)
	const { items } = useAppSelector(state => state.films)
	const { countSlide } = useAppSelector(state => state.home.banner)

	const dispatch = useAppDispatch()

	const arrowClick = () => {
		if (countSlide - 1 < 1) {
			dispatch(setCountSlide(5))
		} else {
			dispatch(setCountSlide(countSlide - 1))
		}
		if (onClick) {
			onClick()
		}

		setIsDisabled(true)
		setTimeout(() => {
			setIsDisabled(false)
		}, 1100)
	}

	return (
		<button
			disabled={isDisabled}
			className={className}
			style={{ ...style, display: 'block' }}
			onClick={arrowClick}
		></button>
	)
}

export default React.memo(PrevArrow)
