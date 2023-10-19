import { FC } from 'react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Banner from '../components/banner/Banner'
import FranchisesSlider from '../components/sliders/FranchiseSliders'
import HomeMiniSlider from '../components/sliders/HomeMiniSlider'
import { useAppSelector } from '../hooks/redux'
import { getFavoritesFromLS } from '../redux/slices/favorites/favoriteActionsCreators'
import { fetchGenreFilms, fetchPersonsFilms } from '../utils/homeFetchSliders'

const Home: FC = () => {
	const { items, status } = useAppSelector(state => state.films)
	const favoriteItems = getFavoritesFromLS()

	return (
		<div className='Home'>
			<Banner />
			{favoriteItems && (
				<HomeMiniSlider title='Ваше избранное' items={favoriteItems} />
			)}
			<HomeMiniSlider title='Лучшее из лучшего' items={items} />
			<HomeMiniSlider
				title='Фильмы Квентина Тарантино'
				fetchFunction={fetchPersonsFilms}
				query='Квентин Тарантино'
			/>
			<FranchisesSlider />
			<HomeMiniSlider
				title='Фильмы ужасов'
				fetchFunction={fetchGenreFilms}
				query='ужасы'
			/>
			<HomeMiniSlider
				title='Фильмы Кристофера Нолана'
				fetchFunction={fetchPersonsFilms}
				query='Кристофер Нолан'
			/>
		</div>
	)
}

export default Home
