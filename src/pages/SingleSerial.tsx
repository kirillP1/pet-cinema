import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { statusLoadingEnum } from '../@types/enums/statusLoadingEnum'
import FilmSingleBanner from '../components/banner/FilmSingleBanner'
import FilmDescription from '../components/description/FilmDesctiption'
import FilmHeader from '../components/header/FilmHeader'
import FilmPersons from '../components/persons/FilmPersons'
import RoutesPreloader from '../components/preloaders/RoutesPreloader'
import RelatedFilmsSlider from '../components/sliders/RelatedFilmsSlider/RelatedFilmsSlider'
import FilmTrailers from '../components/videos/FilmTrailers'
import FilmVideos from '../components/videos/FilmVideos'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchSingleSerial } from '../redux/slices/singleSerial/singleSerialActionCreators'
const SingleSerial: FC = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const { serial, status } = useAppSelector(state => state.singleSerial)

	useEffect(() => {
		dispatch(fetchSingleSerial(Number(id)))
		window.scrollTo(0, 0)
	}, [id])

	return status === statusLoadingEnum.LOADING ||
		status === statusLoadingEnum.ERROR ? (
		<RoutesPreloader />
	) : (
		<div className='singleSerial'>
			<>
				<FilmSingleBanner film={serial} />
				<FilmHeader film={serial} />
				<FilmVideos film={serial} />
				<FilmDescription film={serial} />
				<RelatedFilmsSlider film={serial} />
				<FilmTrailers film={serial} />
				<FilmPersons film={serial} />
			</>
		</div>
	)
}

export default SingleSerial
