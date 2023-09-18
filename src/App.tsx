import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Films from './pages/Films'
import Franchises from './pages/Franchises'
import Home from './pages/Home'
import SingleFilm from './pages/SingleFilm'
import SingleFranchise from './pages/SingleFranchise'
import SingleSerial from './pages/SingleSerial'
import Serials from './pages/Sireals'

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
			</Route>
		</Routes>
	)
}

export default App
