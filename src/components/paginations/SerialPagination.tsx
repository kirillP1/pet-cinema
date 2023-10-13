import { GrNext, GrPrevious } from 'react-icons/gr'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setSerialPagination } from '../../redux/slices/serialFiltersSlice'

const SerialPagination = () => {
	const pagination = useAppSelector(state => state.serialFilters.pagination)
	const dispatch = useAppDispatch()
	const paginationNextClick = () => {
		dispatch(setSerialPagination(pagination + 1))
	}
	const paginationPrevClick = () => {
		dispatch(setSerialPagination(pagination - 1))
	}
	return (
		<div className='serialPagination'>
			<div
				className={
					'serialPagination__prev ' + (pagination === 1 ? 'disabled' : '')
				}
				onClick={() => paginationPrevClick()}
			>
				<GrPrevious />
			</div>
			<div className='serialPagination__count'>{pagination}</div>
			<div
				className='serialPagination__next'
				onClick={() => paginationNextClick()}
			>
				<GrNext />
			</div>
		</div>
	)
}

export default SerialPagination
