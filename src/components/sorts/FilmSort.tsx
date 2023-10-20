import React, { FC, useEffect, useRef, useState } from 'react'
import { MdArrowRight } from 'react-icons/md'
import { activeSortType } from '../../@types/filtersInterfaces'
import { sortFilmList } from '../../data/filmFiltersData'
import {
	handleModalClick,
	onModalOptionClick,
} from '../../helpers/filtersModal'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setFilmSortType } from '../../redux/slices/filmFilters/filmFiltersSlice'

const FilmSort: FC = () => {
	const dispatch = useAppDispatch()

	const [isOpenSort, setIsOpenSort] = useState(false)
	const [selected, setSelected] = useState(
		useAppSelector(state => state.filmFilters.activeSortType)
	)

	const onSortClick = () => {
		isOpenSort ? setIsOpenSort(false) : setIsOpenSort(true)
	}

	const rootRef = useRef<HTMLDivElement>(null)

	const onOptionClick = (item: activeSortType) => {
		onModalOptionClick(
			item,
			setSelected,
			setFilmSortType,
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
			className={`filmSort-wrapper ${isOpenSort ? 'active' : ''}`}
		>
			<div className='filmSort' onClick={() => onSortClick()}>
				<span>{selected.sortName}</span>
				<MdArrowRight />
			</div>
			<ul className='filmSort__options'>
				{sortFilmList.map((item: activeSortType, index: number) => (
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

export default React.memo(FilmSort)
