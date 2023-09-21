export interface IFilmFilterData {
	title: string
	placeholder: string
	options: string[]
}
export const filmFilterData: IFilmFilterData[] = [
	{
		title: 'Страны',
		placeholder: 'Все страны',
		options: ['Россия', 'СССР', 'США', 'Франция', 'Италия'],
	},
	{
		title: 'Жанры',
		placeholder: 'Все жанры',
		options: [
			'Аниме',
			'Биография',
			'Боевики',
			'Вестерны',
			'Военные',
			'Ужасы',
			'Комедии',
		],
	},
	{
		title: 'Годы',
		placeholder: 'Все годы',
		options: ['2020+', '2010-2019', '2000-2009', '1990-1999', '1980-1989'],
	},
]
