import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { FC, useEffect, useRef, useState } from 'react'
import { MdArrowRight, MdOutlineArrowForwardIos } from 'react-icons/md'
import { ISerialsFilterData } from '../../data/serialsFiltersData'
import {
	handleModalClick,
	onModalOptionClick,
} from '../../helpers/filtersModal'
import { useAppDispatch } from '../../hooks/redux'
interface ISerialFilter {
	item: ISerialsFilterData
}
const SerialFilter: FC<ISerialFilter> = ({ item }) => {
	const [isActiveFilter, setIsActiveFilter] = useState(true)
	const [isOpen, setIsOpen] = useState(false)
	const [selected, setSelected] = useState(item.placeholder)

	const rootRef = useRef<HTMLDivElement>(null)
	const dispatch = useAppDispatch()

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
		onModalOptionClick(value, setSelected, action, setIsOpen, dispatch)
	}
	useEffect(() => {
		handleModalClick(rootRef, setIsOpen)
	}, [])
	return (
		<div className={`serials__filter ${isActiveFilter ? 'active' : ''}`}>
			<div className='serials__filter-p' onClick={() => onFilterClick()}>
				<MdOutlineArrowForwardIos />
				{item.title}
			</div>
			<div ref={rootRef}>
				<div
					className={`serials__filter-placeholder ${isOpen ? 'opened' : ''}`}
					onClick={() => onPlaceholderClick()}
				>
					<span>{selected}</span>
					<MdArrowRight />
				</div>
				<ul className={`serials__filter-options ${isOpen ? 'active' : ''}`}>
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

export default SerialFilter
