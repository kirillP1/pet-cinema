import React, { FC } from 'react'
import { Link } from 'react-router-dom'
type typeBannerCarouselCard = {
	item: any
}
const BannerCarouselCard: FC<typeBannerCarouselCard> = ({ item }) => {
	return (
		<div className='carousel-item'>
			<Link to={'/films/' + item.id}>
				<img src={item.poster.url} alt='' />
			</Link>
		</div>
	)
}

export default React.memo(BannerCarouselCard)
