import { FC, useState } from 'react'
import { IArrow } from '../../@types/IArrow'

const NextArrow: FC<IArrow> = props => {
	const { className, style, onClick, countSlide, setCountSlide } = props
	const [isDisabled, setIsDisabled] = useState<boolean>(false)
	const arrowClick = () => {
		setCountSlide(countSlide + 1)

		if (onClick) {
			onClick()
		}

		setIsDisabled(true)
		setTimeout(() => {
			setIsDisabled(false)
		}, 600)
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
