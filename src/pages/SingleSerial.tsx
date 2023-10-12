import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FilmSingleBanner from '../components/banner/FilmSingleBanner'
import FilmDescription from '../components/description/FilmDesctiption'
import FilmHeader from '../components/header/FilmHeader'
import FilmPersons from '../components/persons/FilmPersons'
import RelatedFilmsSlider from '../components/sliders/RelatedFilmsSlider'
import FilmTrailers from '../components/videos/FilmTrailers'
import FilmVideos from '../components/videos/FilmVideos'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchSingleSerial } from '../redux/slices/serialsActionsCreator'
import { setActiveSerial } from '../redux/slices/serialsSlice'
const SingleSerial: FC = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const serial = useAppSelector(state => state.serials.activeSerial)
	useEffect(() => {
		console.log('in')

		dispatch(fetchSingleSerial(Number(id))).then(data => {
			console.log(data)

			dispatch(setActiveSerial(data))
		})
		window.scrollTo(0, 0)
		console.log(serial)
	}, [id])
	console.log(serial)
	return (
		<div className='singleSerial'>
			{serial.length !== 0 && (
				<>
					<FilmSingleBanner film={serial} />
					<FilmHeader film={serial} />
					<FilmVideos film={serial} />
					<FilmDescription film={serial} />
					<RelatedFilmsSlider film={serial} />
					<FilmTrailers film={serial} />
					<FilmPersons film={serial} />
				</>
			)}
		</div>
	)
}

export default SingleSerial
