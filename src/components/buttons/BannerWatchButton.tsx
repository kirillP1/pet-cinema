import React, { FC } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
type typeBannerWatchButton = {
	film: any
}
const BannerWatchButton: FC<typeBannerWatchButton> = ({ film }) => {
	return (
		<Link to={'/films/' + film.id}>
			<AiFillPlayCircle /> Смотреть
		</Link>
	)
}

export default React.memo(BannerWatchButton)
