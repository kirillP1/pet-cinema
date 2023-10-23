import { PersonInMovie } from '@openmoviedb/kinopoiskdev_client'
import React, { FC } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
type typePersonCard = {
	person: PersonInMovie
}
const PersonCard: FC<typePersonCard> = ({ person }) => {
	return (
		<div className='filmSingleBanner__item'>
			<LazyLoadImage
				src={person.photo}
				effect='blur'
				placeholderSrc={person.photo}
				className='filmSingleBanner__item-img'
			/>
			<h4 className='filmSingleBanner__item-name'>{person.name}</h4>
			<div className='filmSingleBanner__item-profession'>
				{person.profession}
			</div>
		</div>
	)
}

export default React.memo(PersonCard)
