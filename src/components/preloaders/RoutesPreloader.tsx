import spinner from '../../assets/img/preloaders/spinner.svg'
const RoutesPreloader = () => {
	return (
		<div className='RoutesPreloader'>
			<div className='RoutesPreloader__loader'>
				<img src={spinner} />
			</div>
		</div>
	)
}

export default RoutesPreloader
