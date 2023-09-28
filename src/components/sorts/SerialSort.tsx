import { FC, useEffect, useRef, useState } from 'react'
import { MdArrowRight } from 'react-icons/md'
import { activeSortType, sortEnum } from '../../@types/filtersInterfaces'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setSerialSortType } from '../../redux/slices/serialFiltersSlice'

export const sortFilmList: activeSortType[] = [
	{ sortName: 'По популярности', sort: sortEnum.RATING },
	{ sortName: 'По алфавиту', sort: sortEnum.NAME },
]

const SerialSort: FC = () => {
	const dispatch = useAppDispatch()
	const [isOpenSort, setIsOpenSort] = useState(false)
	const [selected, setSelected] = useState(
		useAppSelector(state => state.serialFilters.activeSortType)
	)

	const onSortClick = () => {
		isOpenSort ? setIsOpenSort(false) : setIsOpenSort(true)
	}

	const rootRef = useRef<HTMLDivElement>(null)

	const onOptionClick = (item: activeSortType) => {
		setSelected(item)
		dispatch(setSerialSortType(item))
		setIsOpenSort(false)
	}

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event

			if (target instanceof Node && !rootRef.current?.contains(target)) {
				setIsOpenSort(false)
			}
		}

		window.addEventListener('click', handleClick)

		return () => {
			window.removeEventListener('click', handleClick)
		}
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
				{sortFilmList.map((item, index) => (
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

export default SerialSort
