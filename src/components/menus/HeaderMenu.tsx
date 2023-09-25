import { Link } from 'react-router-dom'
import { headerMenu } from '../../data/menusData'

const HeaderMenu = () => {
	return (
		<ul className='header__nav'>
			{headerMenu.map((item, index) => (
				<li key={index}>
					<Link to={item.link}>
						{item.img ? item.img : ''}
						{item.text}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default HeaderMenu
