import { FC } from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setFilmPagination } from '../../redux/slices/filmFilters/filmFiltersSlice'

const FilmPagination: FC = () => {
	const pagination = useAppSelector(state => state.filmFilters.pagination)
	const dispatch = useAppDispatch()
	const paginationNextClick = () => {
		dispatch(setFilmPagination(pagination + 1))
	}
	const paginationPrevClick = () => {
		dispatch(setFilmPagination(pagination - 1))
	}
	return (
		<div className='filmPagination'>
			<div
				className={
					'filmPagination__prev ' + (pagination === 1 ? 'disabled' : '')
				}
				onClick={() => paginationPrevClick()}
			>
				<GrPrevious />
			</div>
			<div className='filmPagination__count'>{pagination}</div>
			<div
				className='filmPagination__next'
				onClick={() => paginationNextClick()}
			>
				<GrNext />
			</div>
		</div>
	)
}

export default FilmPagination
