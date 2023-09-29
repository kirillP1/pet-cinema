import { FC } from 'react'
import ReactPaginate from 'react-paginate'

const FilmPagination: FC = () => {
	return (
		<ReactPaginate
			className='filmPagination'
			breakLabel='...'
			nextLabel='>'
			previousLabel='<'
			pageCount={1}
		/>
	)
}

export default FilmPagination
