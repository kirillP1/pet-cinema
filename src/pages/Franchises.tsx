import { franchiseData } from '../data/franchiseData'

const Franchises = () => {
	return (
		<div className='franchises'>
			<div className='franchises__container'>
				<div className='franchises__items'>
					{franchiseData.map((item, index) => (
						<div
							className='franchises__items-item'
							key={index}
							style={{
								background: `url(${item.bg}) no-repeat`,
							}}
						></div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Franchises
