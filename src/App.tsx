import { FC, lazy } from 'react'

import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
const Home = lazy(() => import('./pages/Home'))
const Films = lazy(() => import('./pages/Films'))
const SingleFilm = lazy(() => import('./pages/SingleFilm'))
const Serials = lazy(() => import('./pages/Serials'))
const SingleSerial = lazy(() => import('./pages/SingleSerial'))
const Franchises = lazy(() => import('./pages/Franchises'))
const SingleFranchise = lazy(() => import('./pages/SingleFranchise'))
const Favorites = lazy(() => import('./pages/Favorites'))
const App: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<Home />} />
				<Route path='films' element={<Films />} />
				<Route path='films/:id' element={<SingleFilm />} />
				<Route path='franchises' element={<Franchises />} />
				<Route path='franchises/:id' element={<SingleFranchise />} />
				<Route path='serials' element={<Serials />} />
				<Route path='serials/:id' element={<SingleSerial />} />
				<Route path='favorites' element={<Favorites />} />
			</Route>
		</Routes>
	)
}

export default App
