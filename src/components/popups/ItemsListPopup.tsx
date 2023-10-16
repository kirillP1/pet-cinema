import { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import ItemsListPopupCard from '../cards/ItemsListPopupCard'
type typeItemsListPopup = {
	title: string
	items: any[]
	setPopupActive: (a: boolean) => void
}
const ItemsListPopup: FC<typeItemsListPopup> = ({
	title,
	items,
	setPopupActive,
}) => {
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
}

export default ItemsListPopup
