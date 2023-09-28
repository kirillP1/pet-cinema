import { FC } from 'react'
import SerialFilters from '../components/filters/SerialFilters'
import SerialSort from '../components/sorts/SerialSort'
import { useAppSelector } from '../hooks/redux'

const Serials: FC = () => {
	const { items } = useAppSelector(state => state.serials)

	return (
		<div className='serials'>
			<div className='serials__container'>
				<SerialFilters />

				<div className='serials__items-wrapper'>
					<SerialSort />
					<div className='serials__items'>
						{items.map((item: any, index: number) => (
							<div
								className='serials__items-item'
								key={index}
								style={{
									background: `url(${item.poster.previewUrl}) no-repeat`,
								}}
							></div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Serials
