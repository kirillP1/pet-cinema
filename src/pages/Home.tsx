import { FC, useEffect, useState } from 'react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Banner from '../components/banner/Banner'
import FranchisesSlider from '../components/sliders/FranchiseSliders'
import HomeMiniSlider from '../components/sliders/HomeMiniSlider'
import { useAppSelector } from '../hooks/redux'
import { getFavoritesFromLS } from '../redux/slices/favoriteActionsCreators'
import { fetchGenreFilms, fetchPersonsFilms } from '../utils/homeFetchSliders'

const Home: FC = () => {
	const { items, status } = useAppSelector(state => state.films)
	const [tarantinoItems, setTarantinoItems] = useState<any>()
	const [nolanItems, setNolanItems] = useState<any>()
	const [yzasItems, setYzasItems] = useState<any>()
	const favoriteItems = getFavoritesFromLS()
	useEffect(() => {
		fetchPersonsFilms('Квентин Тарантино').then(tItems => {
			console.log('tarantino', tItems)

			setTarantinoItems(tItems)
		})
		fetchPersonsFilms('Кристофер Нолан').then(nItems => {
			console.log('nolan', nItems)

			setNolanItems(nItems)
		})
		fetchGenreFilms('ужасы').then(yItems => {
			console.log('ужасы', yItems)

			setYzasItems(yItems)
		})
	}, [])

	tarantinoItems && console.log('home', 'tarantino', tarantinoItems)

	return (
		<div className='Home'>
			<Banner />
			<HomeMiniSlider title='Лучшее из лучшего' items={items} />
			{favoriteItems && (
				<HomeMiniSlider title='Ваше избранное' items={favoriteItems} />
			)}
			{tarantinoItems && (
				<HomeMiniSlider
					title='Фильмы Квентина Тарантино'
					items={tarantinoItems}
				/>
			)}
			<FranchisesSlider />
			<HomeMiniSlider title='Фильмы ужасов' items={yzasItems} />

			<HomeMiniSlider title='Фильмы Кристофера Нолана' items={nolanItems} />
		</div>
	)
}

export default Home
