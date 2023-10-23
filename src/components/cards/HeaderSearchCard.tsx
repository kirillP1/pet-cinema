import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { searchChange } from '../../redux/slices/filters/filtersSlice'
type typeHeaderSearchCard = {
	item: any
}
const HeaderSearchCard: FC<typeHeaderSearchCard> = ({ item }) => {
	const dispatch = useAppDispatch()
	console.log(item)

	const onSearchClick = () => {
		console.log('searchCLick')
		dispatch(searchChange(''))
	}
	return (
		<Link
			to={'/films/' + item.id}
			className='header__search-data--item'
			onClick={() => onSearchClick()}
		>
			<div className='header__search-data--item__poster'>
				<img src={item.poster} />
			</div>
			<div className='header__search-data--item__info'>
				<div className='header__search-data--item__info-title'>{item.name}</div>
				<div className='header__search-data--item__info-rating'>
					{item.rating.toFixed(1)}
				</div>
			</div>
		</Link>
	)
}

export default HeaderSearchCard
