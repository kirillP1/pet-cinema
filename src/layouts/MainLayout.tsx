import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

const MainLayout: FC = () => {
	return (
		<div className='wrapper'>
			<Header />
			<Outlet />
		</div>
	)
}

export default MainLayout
