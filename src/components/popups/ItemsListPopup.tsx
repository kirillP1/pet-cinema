import { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import ItemsListPopupCard from '../cards/ItemsListPopupCard'
type typeItemsListPopup = {
	title: string
	items: any[]
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
						{items.map((item: any, index: number) => (
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
