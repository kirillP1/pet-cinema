import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'
import HeaderMenu from '../menus/HeaderMenu'
import HeaderSearch from '../search/HeaderSearch'

const Header = () => {
	const { width } = useAppSelector(state => state.app)
	return (
		<header className='header'>
			<Link to='/' className='header__logo'>
				{width > 1024 ? 'ПоискФильм' : 'ПФ'}
			</Link>
			<HeaderMenu />
			<HeaderSearch />
		</header>
	)
}

export default Header
