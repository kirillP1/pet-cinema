import debounce from 'lodash.debounce'
import { ChangeEvent, useRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getSearchData } from '../../redux/slices/filtersActionCreator'
import { searchChange } from '../../redux/slices/filtersSlice'
import SearchSkeleton from '../skeletons/SearchSkeleton'

const HeaderSearch = () => {
	const searchRef = useRef<HTMLInputElement>(null)
	const search = useAppSelector(state => state.filters.search)

	const dispatch = useAppDispatch()
	const searchDebounce = debounce(async (e: ChangeEvent<HTMLInputElement>) => {
		await dispatch(searchChange(e.target.value))
		if (searchRef.current) {
			await dispatch(getSearchData(searchRef.current.value))
		} else {
			await dispatch(getSearchData(''))
		}
	}, 1000)
	function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
		searchDebounce(e)

		console.log(search.searchValue)
	}
	const onSearchClick = () => {
		console.log('searchCLick')
		dispatch(searchChange(''))
	}
	return (
		<div className='header__search'>
			<div className='header__search-input'>
				<input
					type='text'
					ref={searchRef}
					onChange={onChangeInput}
					placeholder='Поиск...'
				/>
				<AiOutlineSearch />
			</div>
			<div
				className={
					'header__search-data ' + (search.searchActive ? 'active' : '')
				}
			>
				<div className='header__search-data--wrapper'>
					{search.searchData.length > 0 ? (
						search.searchData.map(item => (
							<Link
								to={'/films/' + item.id}
								className='header__search-data--item'
								onClick={() => onSearchClick()}
							>
								<div className='header__search-data--item__poster'>
									<img src={item.poster} />
								</div>
								<div className='header__search-data--item__info'>
									<div className='header__search-data--item__info-title'>
										{item.name}
									</div>
									<div className='header__search-data--item__info-rating'>
										{item.rating.toFixed(1)}
									</div>
								</div>
							</Link>
						))
					) : (
						<SearchSkeleton />
					)}
				</div>
			</div>
		</div>
	)
}

export default HeaderSearch
