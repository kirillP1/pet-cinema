import { AiOutlineSearch } from 'react-icons/ai'

const HeaderSearch = () => {
	return (
		<div className='header__search'>
			<input type='text' placeholder='Поиск...' />
			<AiOutlineSearch />
		</div>
	)
}

export default HeaderSearch
