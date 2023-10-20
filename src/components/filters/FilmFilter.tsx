import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import React, { FC, useEffect, useRef, useState } from 'react'
import { MdArrowRight, MdOutlineArrowForwardIos } from 'react-icons/md'
import { IFilterData } from '../../data/filmFiltersData'
import {
	handleModalClick,
	onModalOptionClick,
} from '../../helpers/filtersModal'
import { useAppDispatch } from '../../hooks/redux'

interface IFilter {
	item: IFilterData
}

const Filter: FC<IFilter> = ({ item }) => {
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
		<div className={`films__filter ${isActiveFilter ? 'active' : ''}`}>
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
				<ul className={`films__filter-options ${isOpen ? 'active' : ''}`}>
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

export default React.memo(Filter)
