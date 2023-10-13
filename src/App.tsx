import { FC } from 'react'

import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Favorites from './pages/Favorites'
import Films from './pages/Films'
import Franchises from './pages/Franchises'
import Home from './pages/Home'
import Serials from './pages/Serials'
import SingleFilm from './pages/SingleFilm'
import SingleFranchise from './pages/SingleFranchise'
import SingleSerial from './pages/SingleSerial'

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
