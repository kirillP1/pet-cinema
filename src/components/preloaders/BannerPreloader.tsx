import spinner from '../../assets/img/preloaders/spinner.svg'
const BannerPreloader = () => {
	return (
		<div className='BannerPreloader'>
			<div className='BannerPreloader__loader'>
				<img src={spinner} />
			</div>
		</div>
	)
}

export default BannerPreloader
