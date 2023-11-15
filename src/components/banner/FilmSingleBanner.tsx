import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import { FC, useEffect } from 'react'
import { IFilms } from '../../data/filmsLocalData'
import { scrollListener } from '../../helpers/homeBanner/homeBanner'
import { useAppDispatch } from '../../hooks/redux'
import { setScrollTop } from '../../redux/slices/home/homeSlice'
import BannerBackground from './BannerBackground'
import BannerSingleContent from './BannerSingleContent'
import BannerSinglePersons from './BannerSinglePersons'
type typeFilmSingleBanner = {
	film: IFilms | MovieDtoV13
}

const FilmSingleBanner: FC<typeFilmSingleBanner> = ({ film }) => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		scrollListener(dispatch, setScrollTop)
	}, [])
	return (
		<div className='filmSingleBanner'>
			<BannerBackground film={film} />
			<BannerSingleContent />
			<BannerSinglePersons />
		</div>
	)
}

export default FilmSingleBanner
