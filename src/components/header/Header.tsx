import { Link } from 'react-router-dom'
import HeaderMenu from '../menus/HeaderMenu'
import HeaderSearch from '../search/HeaderSearch'

const Header = () => {
	return (
		<header className='header'>
			<Link to='/' className='header__logo'>
				ПоискФильм
			</Link>
			<HeaderMenu />
			<HeaderSearch />
		</header>
	)
}

export default Header
