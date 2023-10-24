import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { headerMenu } from '../../data/menusData'
import { useAppSelector } from '../../hooks/redux'

const HeaderMenu = () => {
	const [open, setOpen] = useState(false)
	const { width } = useAppSelector(state => state.app)
	const menuClick = (e: React.MouseEvent<HTMLElement>, value: boolean) => {
		console.log(value)
		e.stopPropagation()
		setOpen(value)
	}
	return (
		<nav onClick={e => menuClick(e, false)}>
			{width > 1024 ? (
				<ul className={'header__nav '}>
					{headerMenu.map((item, index) => (
						<li key={index}>
							<NavLink to={item.link} className='header__nav-link'>
								{item.img ? item.img : ''}
								{item.text}
							</NavLink>
						</li>
					))}
				</ul>
			) : (
				<div className={'header__background ' + (open && 'active')}>
					<ul className={'header__nav '} onClick={e => e.stopPropagation()}>
						{headerMenu.map((item, index) => (
							<li key={index}>
								<NavLink
									to={item.link}
									className='header__nav-link'
									onClick={e => menuClick(e, false)}
								>
									{item.img ? item.img : ''}
									{item.text}
								</NavLink>
							</li>
						))}
						<div
							className='header__burger-btn close'
							onClick={e => menuClick(e, false)}
						>
							<span />
						</div>
					</ul>
				</div>
			)}
			<div className='header__burger-btn' onClick={e => menuClick(e, true)}>
				<span />
			</div>
		</nav>
	)
}

export default HeaderMenu
