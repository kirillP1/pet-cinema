import FilmFilters from '../components/filters/FilmFilters'
import FilmSort from '../components/sorts/FilmSort'
import { headerSliderSlides } from '../data/headerSliderSlides'

const Films = () => {
	return (
		<div className='films'>
			<div className='films__container'>
				<FilmFilters />

				<div className='films__items-wrapper'>
					<FilmSort />
					<div className='films__items'>
						{headerSliderSlides.map(item => (
							<div
								className='films__items-item'
								style={{ background: `url(${item.img}) no-repeat` }}
							></div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Films
