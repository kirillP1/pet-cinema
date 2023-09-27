import { useEffect, useState } from 'react'
import FilmFilters from '../components/filters/FilmFilters'
import FilmSort from '../components/sorts/FilmSort'
import { filmFilterData } from '../data/filmFilterData'
import { headerSliderSlides } from '../data/headerSliderSlides'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import {
	fetchFilms,
	getCountriesAll,
	getGenresAll,
	getYearsAll,
} from '../redux/slices/ActionsCreators'

const Films = () => {
	const dispatch = useAppDispatch()

	const [filmsData, setFilmsData] = useState<any>(headerSliderSlides)
	const { items } = useAppSelector(state => state.films)
	const filter = useAppSelector(state => state.filter)

	useEffect(() => {
		dispatch(getGenresAll)
		dispatch(getYearsAll)
		dispatch(getCountriesAll)
	}, [])

	useEffect(() => {
		filmFilterData[0].all = filter.filters.countries.all
		filmFilterData[1].all = filter.filters.genres.all
		filmFilterData[2].all = filter.filters.years.all
	}, [])

	useEffect(() => {
		dispatch(
			fetchFilms(
				filter.filters.years.active,
				filter.filters.genres.active,
				filter.filters.countries.active,
				filter.activeSortType
			)
		)
	}, [filter])

	return (
		<div className='films'>
			<div className='films__container'>
				<FilmFilters />

				<div className='films__items-wrapper'>
					<FilmSort />
					<div className='films__items'>
						{items.map((item: any, index: number) => (
							<div
								className='films__items-item'
								key={index}
								style={{
									background: `url(${item.poster.previewUrl}) no-repeat`,
								}}
							></div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Films
