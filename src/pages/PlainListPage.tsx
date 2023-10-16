import { FC } from 'react'
import FavoriteCard from '../components/cards/FavoriteCard'
type typePlainListPage = {
	title: string
	items: any[]
}
const PlainListPage: FC<typePlainListPage> = ({ title, items }) => {
	return (
		<div className='plainListPage'>
			<div className='plainListPage__container'>
				<div className='plainListPage__items'>
					{items[0] &&
						items.map((item: any, index: number) => (
							<FavoriteCard item={item} key={index} />
						))}
				</div>
			</div>
		</div>
	)
}

export default PlainListPage
