import { IPerson } from '../../data/filmsLocalData'
import { useAppSelector } from '../../hooks/redux'
import PersonCard from '../cards/PersonCard'

const BAnnerSinglePersons = () => {
	const { film } = useAppSelector(state => state.singleFilm)
	const { scrollTop } = useAppSelector(state => state.home.banner)
	return (
		<div
			className='filmSingleBanner__persons active filmSingleBanner__element'
			style={{
				transform: `translate3d(0, calc((${scrollTop}px) / 5.7), 0)`,
			}}
		>
			{film.persons?.slice(0, 5).map((person: IPerson, index: number) => (
				<PersonCard person={person} />
			))}
		</div>
	)
}

export default BAnnerSinglePersons
