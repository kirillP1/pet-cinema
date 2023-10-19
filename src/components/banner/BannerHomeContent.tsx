import { AiFillPlayCircle } from 'react-icons/ai'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'
import BannerButton from '../buttons/BannerButton'

const BannerHomeContent = () => {
	const { scrollTop, itemsData, activeSlide } = useAppSelector(
		state => state.home.banner
	)
	const activeSlideData = itemsData[activeSlide]
	return (
		<div
			className='banner__content active banner__element'
			style={{
				transform: `translate3d(0, calc((${scrollTop}px) / 7.7), 0)`,
			}}
		>
			<h2 className='banner__content-title'>
				<LazyLoadImage
					src={activeSlideData.logo && activeSlideData.logo?.url}
					effect='blur'
					placeholderSrc={activeSlideData.logo && activeSlideData.logo?.url}
					alt={activeSlideData.name}
				/>
			</h2>
			<h4>
				<span>{activeSlideData.year}</span>
				<span>{activeSlideData.movieLength} минут</span>
				<span>
					{activeSlideData.genres.map((genre: any) => `${genre.name} `)}
				</span>
			</h4>
			<p>{activeSlideData.shortDescription}...</p>
			<div className='banner__content-buttons'>
				<Link to={'/films/' + activeSlideData.id}>
					<AiFillPlayCircle /> Смотреть
				</Link>

				<BannerButton film={activeSlideData} />
			</div>
		</div>
	)
}

export default BannerHomeContent
