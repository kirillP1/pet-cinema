import ContentLoader from 'react-content-loader'

const MiniSliderSkeleton = () => {
	return (
		<ContentLoader
			speed={2}
			width={361}
			height={180}
			viewBox='0 0 361 180'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
		>
			<rect x='0' y='0' rx='0' ry='0' width='361' height='180' />
		</ContentLoader>
	)
}

export default MiniSliderSkeleton
