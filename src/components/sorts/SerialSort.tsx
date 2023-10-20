import React, { FC, useEffect, useRef, useState } from 'react'
import { MdArrowRight } from 'react-icons/md'
import { activeSortType } from '../../@types/filtersInterfaces'
import { sortSerialList } from '../../data/serialsFiltersData'
import {
	handleModalClick,
	onModalOptionClick,
} from '../../helpers/filtersModal'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setSerialSortType } from '../../redux/slices/serialFilters/serialFiltersSlice'

const SerialSort: FC = () => {
	const dispatch = useAppDispatch()

	const [isOpenSort, setIsOpenSort] = useState(false)
	const [selected, setSelected] = useState(
		useAppSelector(state => state.serialFilters.activeSortType)
	)

	const rootRef = useRef<HTMLDivElement>(null)

	const onSortClick = () => {
		isOpenSort ? setIsOpenSort(false) : setIsOpenSort(true)
	}
	const onOptionClick = (item: activeSortType) => {
		onModalOptionClick(
			item,
			setSelected,
			setSerialSortType,
			setIsOpenSort,
			dispatch
		)
	}

	useEffect(() => {
		handleModalClick(rootRef, setIsOpenSort)
	}, [])

	return (
		<div
			ref={rootRef}
			className={`serialSort-wrapper ${isOpenSort ? 'active' : ''}`}
		>
			<div className='serialSort' onClick={() => onSortClick()}>
				<span>{selected.sortName}</span>
				<MdArrowRight />
			</div>
			<ul className='serialSort__options'>
				{sortSerialList.map((item, index) => (
					<li
						key={index}
						className={item === selected ? 'active' : ''}
						value={item.sort}
						onClick={() => onOptionClick(item)}
					>
						{item.sortName}
					</li>
				))}
			</ul>
		</div>
	)
}

export default React.memo(SerialSort)
