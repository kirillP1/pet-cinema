import { FC, useState } from 'react'
import { IArrow } from '../../@types/IArrow'

const PrevArrow: FC<IArrow> = props => {
	const { className, style, onClick, countSlide, setCountSlide } = props
	const [isDisabled, setIsDisabled] = useState<boolean>(false)
	const arrowClick = () => {
		if (countSlide - 1 < 1) {
			setCountSlide(5)
		} else {
			setCountSlide(countSlide - 1)
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

export default PrevArrow
