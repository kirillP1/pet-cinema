import { FC, useState } from 'react'
import { IArrow } from '../../@types/IArrow'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setCountSlide } from '../../redux/slices/home/homeSlice'

const NextArrow: FC<IArrow> = props => {
	const { className, style, onClick } = props
	const [isDisabled, setIsDisabled] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	const { countSlide } = useAppSelector(state => state.home.banner)
	const arrowClick = () => {
		dispatch(setCountSlide(countSlide + 1))
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

export default NextArrow
