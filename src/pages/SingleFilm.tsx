import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { statusLoadingEnum } from '../@types/enums/statusLoadingEnum'
import FilmSingleBanner from '../components/banner/FilmSingleBanner'
import FilmDescription from '../components/description/FilmDesctiption'
import FilmHeader from '../components/header/FilmHeader'
import FilmPersons from '../components/persons/FilmPersons'
import RoutesPreloader from '../components/preloaders/RoutesPreloader'
import RelatedFilmsSlider from '../components/sliders/RelatedFilmsSlider'
import FilmTrailers from '../components/videos/FilmTrailers'
import FilmVideos from '../components/videos/FilmVideos'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchSingleFilm } from '../redux/slices/singleFilm/singleFilmActionCreators'

const SingleFilm: FC = () => {
	const { id } = useParams()
	const { film, status } = useAppSelector(state => state.singleFilm)
	const dispatch = useAppDispatch()
	useEffect(() => {
		console.log('in')
		if (id) {
			dispatch(fetchSingleFilm(Number(id)))
		}

		window.scrollTo(0, 0)
		console.log(film, status)
	}, [id])
	console.log(film)

	return status === statusLoadingEnum.LOADING ||
		status === statusLoadingEnum.ERROR ? (
		<RoutesPreloader />
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
