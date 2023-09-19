import { FC } from 'react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Banner from '../components/banner/Banner'
import FranchisesSlider from '../components/sliders/FranchiseSliders'

const Home: FC = () => {
	return (
		<div className='Home'>
			<Banner />
			<FranchisesSlider />
		</div>
	)
}

export default Home
