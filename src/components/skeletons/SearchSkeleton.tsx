import ContentLoader from 'react-content-loader'

const SearchSkeleton = () => {
	console.log('skeleton')

	return (
		<ContentLoader
			speed={2}
			width={263}
			height={63}
			viewBox='0 0 263 63'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
		>
			<rect x='0' y='0' rx='3' ry='3' width='40' height='60' />
			<rect x='53' y='11' rx='2' ry='2' width='60' height='22' />
			<rect x='53' y='37' rx='8' ry='8' width='30' height='20' />
		</ContentLoader>
	)
}

export default SearchSkeleton
