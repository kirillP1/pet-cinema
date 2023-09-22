import { ReactElement } from 'react'
import { FaHouse } from 'react-icons/fa6'

type IHeaderMenu = {
	text: string
	link: string
	img?: ReactElement
}

export const headerMenu: IHeaderMenu[] = [
	{ text: 'Главная', link: '/', img: <FaHouse /> },
	{ text: 'Франшизы', link: '/franchises' },
	{ text: 'Фильмы', link: '/films' },
	{ text: 'Сериалы', link: '/serials' },
	{ text: 'Избранное', link: '/favorites' },
]
