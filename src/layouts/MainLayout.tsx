import { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import RoutesPreloader from '../components/preloaders/RoutesPreloader'

const MainLayout: FC = () => {
	return (
		<div className='wrapper'>
			<Header />
			<Suspense fallback={<RoutesPreloader />}>
				<Outlet />
			</Suspense>
		</div>
	)
}

export default MainLayout
