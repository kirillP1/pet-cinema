import debounce from 'lodash.debounce'
import { ChangeEvent, useEffect, useRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getSearchData } from '../../redux/slices/filtersActionCreator'
import { searchChange, setSearchActive } from '../../redux/slices/filtersSlice'
import { statusLoadingEnum } from '../../redux/slices/serialsSlice'
import HeaderSearchCard from '../cards/HeaderSearchCard'
import SearchSkeleton from '../skeletons/SearchSkeleton'

const HeaderSearch = () => {
	const searchRef = useRef<HTMLInputElement>(null)
	const search = useAppSelector(state => state.filters.search)
	const searchDataRef = useRef<HTMLDivElement>(null)
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

		console.log(search.searchValue, search.status)
	}
	const onSearchClick = () => {
		if (search.searchValue.length > 0) {
			dispatch(setSearchActive(true))
			console.log('ac', search.searchActive)
		}
	}
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event

			if (
				target instanceof Node &&
				!searchDataRef.current?.contains(target) &&
				search.searchActive
			) {
				dispatch(setSearchActive(false))
			}
		}

		window.addEventListener('click', handleClick)

		return () => {
			window.removeEventListener('click', handleClick)
		}
	}, [])

	return (
		<div
			className='header__search'
			onClick={() => onSearchClick()}
			ref={searchDataRef}
		>
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
					{search.searchData.map((item, index) =>
						search.status === statusLoadingEnum.LOADING ||
						search.status === statusLoadingEnum.ERROR ? (
							<SearchSkeleton key={index} />
						) : (
							<HeaderSearchCard key={index} item={item} />
						)
					)}
				</div>
			</div>
		</div>
	)
}

export default HeaderSearch
