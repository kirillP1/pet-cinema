import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FilmSingleBanner from '../components/banner/FilmSingleBanner'
import FilmDescription from '../components/description/FilmDesctiption'
import FilmHeader from '../components/header/FilmHeader'
import FilmPersons from '../components/persons/FilmPersons'
import RelatedFilmsSlider from '../components/sliders/RelatedFilmsSlider'
import FilmTrailers from '../components/videos/FilmTrailers'
import FilmVideos from '../components/videos/FilmVideos'
import { filmsLocalData } from '../data/filmsLocalData'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchSingleFilms } from '../redux/slices/filmsActionsCreators'
import { setActiveFilm } from '../redux/slices/filmsSlice'

const SingleFilm: FC = () => {
	const { id } = useParams()
	const film = useAppSelector(state => state.films.activeFilm)
	const dispatch = useAppDispatch()
	useEffect(() => {
		console.log('in')

		dispatch(fetchSingleFilms(Number(id))).then(data => {
			console.log(data)

			if (!data) {
				dispatch(setActiveFilm(filmsLocalData[0]))
			} else {
				dispatch(setActiveFilm(data))
			}
		})
		window.scrollTo(0, 0)
		console.log(film)
	}, [id])
	console.log(film)

	return film.length === 0 ? (
		<>Загрузка</>
	) : (
		<div className='singleFilm'>
			<FilmSingleBanner film={film} />
			<FilmHeader film={film} />
			<FilmVideos film={film} />
			<FilmDescription film={film} />
			<RelatedFilmsSlider film={film} />
			<FilmTrailers film={film} />
			<FilmPersons film={film} />
		</div>
	)
}

export default SingleFilm
