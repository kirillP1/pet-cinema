import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { FC, useEffect, useRef, useState } from 'react'
import { MdArrowRight, MdOutlineArrowForwardIos } from 'react-icons/md'
import { IFilmsFilterData } from '../../data/filmFiltersData'
import { useAppDispatch } from '../../hooks/redux'

interface IFilmFilter {
	item: IFilmsFilterData
}
type Option = { title: string; value: string }

const FilmFilter: FC<IFilmFilter> = ({ item }) => {
	const [isActiveFilter, setIsActiveFilter] = useState(true)
	const [isOpen, setIsOpen] = useState(false)
	const [selected, setSelected] = useState(item.placeholder)

	const rootRef = useRef<HTMLDivElement>(null)
	const dispatch = useAppDispatch()

	const filterClasses = ['films__filter', isActiveFilter ? 'active' : '']
	const optionsClasses = ['films__filter-options', isOpen ? 'active' : '']

	const onFilterClick = () => {
		isActiveFilter ? setIsActiveFilter(false) : setIsActiveFilter(true)
	}
	const onPlaceholderClick = () => {
		isOpen ? setIsOpen(false) : setIsOpen(true)
	}
	const onOptionClick = (
		value: string,
		action: ActionCreatorWithPayload<string>
	) => {
		setSelected(value)
		dispatch(action(value))
		setIsOpen(false)
	}
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event

			if (target instanceof Node && !rootRef.current?.contains(target)) {
				setIsOpen(false)
			}
		}

		window.addEventListener('click', handleClick)

		return () => {
			window.removeEventListener('click', handleClick)
		}
	}, [])
	return (
		<div className={filterClasses.join(' ')}>
			<div className='films__filter-p' onClick={() => onFilterClick()}>
				<MdOutlineArrowForwardIos />
				{item.title}
			</div>
			<div ref={rootRef}>
				<div
					className={`films__filter-placeholder ${isOpen ? 'opened' : ''}`}
					onClick={() => onPlaceholderClick()}
				>
					<span>{selected}</span>
					<MdArrowRight />
				</div>
				<ul className={optionsClasses.join(' ')}>
					{item.all?.map((option, index) => (
						<li
							key={index}
							className={selected === option ? 'active' : ''}
							value={option}
							onClick={() => onOptionClick(option, item.action)}
						>
							{option}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default FilmFilter