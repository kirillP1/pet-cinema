import { FC, useState } from 'react'
import { IArrow } from '../../@types/IArrow'
import { headerSliderSlides } from '../../data/headerSliderSlides'
import { useAppSelector } from '../../hooks/redux'

const PrevArrow: FC<IArrow> = props => {
	const { className, style, onClick, countSlide, setCountSlide } = props
	const [isDisabled, setIsDisabled] = useState<boolean>(false)

	const { items } = useAppSelector(state => state.kinopoisk)
	const itemsData = items.length !== 0 ? items : headerSliderSlides

	const arrowClick = () => {
		if (countSlide - 1 < 1) {
			setCountSlide(itemsData.length)
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
