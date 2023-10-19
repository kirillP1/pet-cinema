import { FC, useEffect } from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { setScrollTop } from '../../redux/slices/home/homeSlice'
import BannerBackground from './BannerBackground'
import BannerSingleContent from './BannerSingleContent'
import BAnnerSinglePersons from './BannerSinglePersons'
type typeFilmSingleBanner = {
	film: any
}

const FilmSingleBanner: FC<typeFilmSingleBanner> = ({ film }) => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		window.addEventListener('scroll', e => {
			dispatch(setScrollTop(window.scrollY))
		})
	}, [])
	return (
		<div className='filmSingleBanner'>
			<BannerBackground film={film} />
			<BannerSingleContent />
			<BAnnerSinglePersons />
		</div>
	)
}

export default FilmSingleBanner
