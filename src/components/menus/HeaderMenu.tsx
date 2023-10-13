import { NavLink } from 'react-router-dom'
import { headerMenu } from '../../data/menusData'

const HeaderMenu = () => {
	return (
		<ul className='header__nav'>
			{headerMenu.map((item, index) => (
				<li key={index}>
					<NavLink to={item.link} className='header__nav-link'>
						{item.img ? item.img : ''}
						{item.text}
					</NavLink>
				</li>
			))}
		</ul>
	)
}

export default HeaderMenu
