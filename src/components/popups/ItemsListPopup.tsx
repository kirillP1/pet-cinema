import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client'
import { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { IFilms } from '../../data/filmsLocalData'
import ItemsListPopupCard from '../cards/ItemsListPopupCard'
type typeItemsListPopup = {
	title: string
	items: IFilms[] | MovieDtoV13[] | undefined
	popupActive: boolean
	setPopupActive: (e: boolean) => void
}
const ItemsListPopup: FC<typeItemsListPopup> = ({
	title,
	items,
	popupActive,
	setPopupActive,
}) => {
	if (popupActive) {
		return (
			<div className='ItemsListPopup'>
				<div
					className='ItemsListPopup__close'
					onClick={() => setPopupActive(false)}
				>
					<AiOutlineClose />
				</div>
				<div className='ItemsListPopup__container'>
					<div className='ItemsListPopup__title'>{title}</div>
					<div className='ItemsListPopup__items'>
						{items &&
							items.map((item: IFilms | MovieDtoV13, index: number) => (
								<ItemsListPopupCard item={item} />
							))}
					</div>
				</div>
			</div>
		)
	} else {
		return <></>
	}
}

export default ItemsListPopup
