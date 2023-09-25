import { useEffect, useRef, useState } from 'react'
import { MdArrowRight } from 'react-icons/md'
const FilmSort = () => {
	const sortList = ['По названию', 'По рейтингу', 'По дате выхода']

	const [isOpenSort, setIsOpenSort] = useState(false)
	const [selected, setSelected] = useState(sortList[0])

	const onSortClick = () => {
		isOpenSort ? setIsOpenSort(false) : setIsOpenSort(true)
	}

	const rootRef = useRef<HTMLDivElement>(null)

	const onOptionClick = (item: string) => {
		setSelected(item)
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
			className={`filmSort-wrapper ${isOpenSort ? 'active' : ''}`}
		>
			<div className={`filmSort `} onClick={() => onSortClick()}>
				<span>{selected}</span>
				<MdArrowRight />
			</div>
			<ul className='filmSort__options'>
				{sortList.map((item, index) => (
					<li
						key={index}
						className={item === selected ? 'active' : ''}
						value={item}
						onClick={() => onOptionClick(item)}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}

export default FilmSort
