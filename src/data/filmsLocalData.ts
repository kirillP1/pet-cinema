export interface IPlayer {
	iframeUrl: string
	quality: string
	source: string
	translation: string
	updatedAt: string
}
interface IPoster {
	url: string
	previewUrl: string
}
interface IBackdrop {
	url: string
	previewUrl: string
}
interface ILogo {
	url: string
}
export interface IGenre {
	name: string
}
interface IRating {
	kp: number
	imdb: number
	filmCritics: number
	russianFilmCritics: number
}
interface IVotes {
	kp: number
	imdb: number
	filmCritics: number
	russianFilmCritics: number
	await: number
}
interface ICountry {
	name: string
}
export interface ITrailer {
	url: string
	name: string
	site: string
	type: string
}
interface IVideo {
	trailers: ITrailer[]
	teasers: []
}
export interface IPerson {
	description: string
	enName: string
	enProfession: string
	id: number
	name: string
	photo: string
	profession: string
}
export interface IFilms {
	id: number
	poster: IPoster
	backdrop: IBackdrop
	name: string
	logo?: ILogo
	year: number
	ageRating?: number
	movieLength: number
	genres: IGenre[]
	shortDescription: string
	rating: IRating
	votes: IVotes
	countries: ICountry[]
	videos: IVideo
	description?: string
	similarMovies?: IFilms[]
	persons?: IPerson[]
}
export const filmsLocalData: IFilms[] = [
	{
		rating: {
			kp: 8.813,
			imdb: 8.5,
			filmCritics: 6.8,
			russianFilmCritics: 100,
		},
		votes: {
			kp: 1678838,
			imdb: 895482,
			filmCritics: 130,
			russianFilmCritics: 12,
			await: 15,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/bGksau9GGu0uJ8DJQ8DYc9JW5LM.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/bGksau9GGu0uJ8DJQ8DYc9JW5LM.jpg',
		},
		movieLength: 112,
		id: 535341,
		name: '1+1',
		year: 2011,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/535341.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_535341.jpg',
		},
		genres: [
			{
				name: 'драма',
			},
			{
				name: 'комедия',
			},
			{
				name: 'биография',
			},
		],
		countries: [
			{
				name: 'Франция',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/0RqDiYnFxTk',
					name: 'The Intouchables / Intouchables (2011) - Trailer (English subtitles)',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/34WIbmXkewU',
					name: 'The Intouchables Official Trailer #1 (2012) HD Movie',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/0RqDiYnFxTk',
					name: 'The Intouchables / Intouchables (2011) - Trailer (English subtitles)',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/34WIbmXkewU',
					name: 'The Intouchables Official Trailer #1 (2012) HD Movie',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Аристократ на коляске нанимает в сиделки бывшего заключенного. Искрометная французская комедия с Омаром Си',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/1531675/2a0000017f0262661cde61dc260cb86f7830/orig',
		},
	},
	{
		rating: {
			kp: 8.56,
			imdb: 7.8,
			filmCritics: 6.5,
			russianFilmCritics: 86.3636,
		},
		votes: {
			kp: 1502719,
			imdb: 370248,
			filmCritics: 277,
			russianFilmCritics: 22,
			await: 13642,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/tintsaQ0WLzZsTMkTiqtMB3rfc8.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/tintsaQ0WLzZsTMkTiqtMB3rfc8.jpg',
		},
		movieLength: 113,
		id: 1143242,
		name: 'Джентльмены',
		year: 2019,
		poster: {
			url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/637271d5-61b4-4e46-ac83-6d07494c7645/orig',
			previewUrl:
				'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/637271d5-61b4-4e46-ac83-6d07494c7645/x1000',
		},
		genres: [
			{
				name: 'криминал',
			},
			{
				name: 'комедия',
			},
			{
				name: 'боевик',
			},
		],
		countries: [
			{
				name: 'Великобритания',
			},
			{
				name: 'США',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/e-aiHVdRlJg',
					name: 'ДЖЕНТЛЬМЕНЫ | Трейлер #2 | В кино с 13 февраля',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/Fui5_1tTuac',
					name: 'ДЖЕНТЛЬМЕНЫ | Трейлер | В кино с 13 февраля',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/e-aiHVdRlJg',
					name: 'ДЖЕНТЛЬМЕНЫ | Трейлер #2 | В кино с 13 февраля',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/Fui5_1tTuac',
					name: 'ДЖЕНТЛЬМЕНЫ | Трейлер | В кино с 13 февраля',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/KlXsguV9g0E',
					name: 'The Gentlemen | Official Trailer 2 [HD] | In Theaters January 24, 2020',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/2B0RpUGss2c',
					name: 'The Gentlemen | Official Trailer [HD] | Coming Soon to Theaters',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Наркобарон хочет уйти на покой, но криминальный мир не отпускает. Успешное возвращение Гая Ричи к корням',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/1534341/2a00000176f18064fd95abb74cbcc02873b8/orig',
		},
	},
	{
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/RcNhbJndBv8',
					name: 'ГНЕВ ЧЕЛОВЕЧЕСКИЙ | Финальный трейлер | В кинотеатрах с 22 апреля',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/RcNhbJndBv8',
					name: 'ГНЕВ ЧЕЛОВЕЧЕСКИЙ | Финальный трейлер | В кинотеатрах с 22 апреля',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/wo1kO8m2Nik',
					name: 'WRATH OF MAN | Official Red Band Trailer | MGM Studios',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/EFYEni2gsK0',
					name: 'Official Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		rating: {
			kp: 7.603,
			imdb: 7.1,
			filmCritics: 6.3,
			russianFilmCritics: 72.973,
		},
		votes: {
			kp: 1139008,
			imdb: 195438,
			filmCritics: 256,
			russianFilmCritics: 37,
			await: 23490,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/70AV2Xx5FQYj20labp0EGdbjI6E.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/70AV2Xx5FQYj20labp0EGdbjI6E.jpg',
		},
		movieLength: 119,
		id: 1318972,
		name: 'Гнев человеческий',
		year: 2021,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/1318972.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_1318972.jpg',
		},
		genres: [
			{
				name: 'боевик',
			},
			{
				name: 'триллер',
			},
		],
		countries: [
			{
				name: 'Великобритания',
			},
			{
				name: 'США',
			},
		],
		shortDescription:
			'Хмурый мужчина прикидывается инкассатором, чтобы выйти на грабителей. Гай Ричи и Джейсон Стэйтем снова вместе',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/223007/2a00000179d1cc14e6c741017c7f7a2f15c2/orig',
		},
	},
	{
		rating: {
			kp: 7.976,
			imdb: 8.2,
			filmCritics: 7.8,
			russianFilmCritics: 77.4194,
		},
		votes: {
			kp: 1125382,
			imdb: 1471424,
			filmCritics: 289,
			russianFilmCritics: 31,
			await: 43024,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/7Nwnmyzrtd0FkcRyPqmdzTPppQa.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/7Nwnmyzrtd0FkcRyPqmdzTPppQa.jpg',
		},
		movieLength: 180,
		id: 462682,
		name: 'Волк с Уолл-стрит',
		year: 2013,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/462682.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_462682.jpg',
		},
		genres: [
			{
				name: 'драма',
			},
			{
				name: 'криминал',
			},
			{
				name: 'биография',
			},
			{
				name: 'комедия',
			},
		],
		countries: [
			{
				name: 'США',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/W8oTil54t1s',
					name: 'Волк с Уолл-стрит - Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/W8oTil54t1s',
					name: 'Волк с Уолл-стрит - Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/Slj4-Sv-YNA',
					name: 'Official Trailer #2',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/iszwuX1AK6A',
					name: 'Official Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Восхождение циника-гедониста на бизнес-олимп 1980-х. Блистательный тандем Леонардо ДиКаприо и Мартина Скорсезе',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/1534341/2a00000178c64fe43f3b567acaaa73e861f0/orig',
		},
	},
	{
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/cD2MCd7grm4',
					name: 'Брат - Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/Zq55yxODJiA',
					name: 'Брат - Трейлер (1997)',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/cD2MCd7grm4',
					name: 'Брат - Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/Zq55yxODJiA',
					name: 'Брат - Трейлер (1997)',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		id: 41519,
		name: 'Брат',
		rating: {
			kp: 8.296,
			imdb: 7.8,
			filmCritics: 7.6,
			russianFilmCritics: 0,
		},
		votes: {
			kp: 1064751,
			imdb: 22941,
			filmCritics: 5,
			russianFilmCritics: 2,
			await: 0,
		},
		year: 1997,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/41519.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_41519.jpg',
		},
		genres: [
			{
				name: 'драма',
			},
			{
				name: 'криминал',
			},
			{
				name: 'боевик',
			},
		],
		countries: [
			{
				name: 'Россия',
			},
		],
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/cRQq2VXKP9Vt9NHLXoHailKVhrW.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/cRQq2VXKP9Vt9NHLXoHailKVhrW.jpg',
		},
		movieLength: 100,
		shortDescription:
			'Дембель Данила Багров защищает слабых в Петербурге 1990-х. Фильм, сделавший Сергея Бодрова народным героем',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/2439731/2a0000017c61da4f185f94d808f4d90182a8/orig',
		},
	},
	{
		rating: {
			kp: 8.275,
			imdb: 7.7,
			filmCritics: 5.8,
			russianFilmCritics: 0,
		},
		votes: {
			kp: 1018003,
			imdb: 606152,
			filmCritics: 62,
			russianFilmCritics: 0,
			await: 0,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/vaVaNrscmsG8CUKYxiwZGFNqGJo.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/vaVaNrscmsG8CUKYxiwZGFNqGJo.jpg',
		},
		movieLength: 103,
		id: 8124,
		name: 'Один дома',
		year: 1990,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/8124.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_8124.jpg',
		},
		genres: [
			{
				name: 'комедия',
			},
			{
				name: 'семейный',
			},
		],
		countries: [
			{
				name: 'США',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/sptc2IcHnc4',
					name: 'Home Alone (1990) ORIGINAL TRAILER [HD 1080p]',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/dzdpqRGA1qc',
					name: 'Official Re-Release Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/0iNmVVlmmv8',
					name: 'Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/sptc2IcHnc4',
					name: 'Home Alone (1990) ORIGINAL TRAILER [HD 1080p]',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/dzdpqRGA1qc',
					name: 'Official Re-Release Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/0iNmVVlmmv8',
					name: 'Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Мальчик-озорник задает жару грабителям. Лучшая комедия для создания праздничного настроения у всей семьи',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/212840/2a00000172550ce8255397b4e3d6f9938ddf/orig',
		},
	},
	{
		rating: {
			kp: 7.972,
			imdb: 7.9,
			filmCritics: 7.4,
			russianFilmCritics: 75,
		},
		votes: {
			kp: 1014540,
			imdb: 1359191,
			filmCritics: 335,
			russianFilmCritics: 12,
			await: 38689,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg',
		},
		movieLength: 162,
		id: 251733,
		name: 'Аватар',
		year: 2009,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/251733.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_251733.jpg',
		},
		genres: [
			{
				name: 'фантастика',
			},
			{
				name: 'боевик',
			},
			{
				name: 'драма',
			},
			{
				name: 'приключения',
			},
		],
		countries: [
			{
				name: 'США',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/4HFlPcX2HFo',
					name: 'Аватар [дублированный трейлер HD]',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/4HFlPcX2HFo',
					name: 'Аватар [дублированный трейлер HD]',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/jm2sNLIPPvA',
					name: 'Back in Theatres',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/5PSNL1qE6VY',
					name: 'Official Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Парализованный морпех становится мессией для жителей Пандоры. Самый кассовый фильм в истории кино',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/2385704/2a00000176f1bb64212c9df414a8909c8f44/orig',
		},
	},
	{
		rating: {
			kp: 9.108,
			imdb: 9.3,
			filmCritics: 8.4,
			russianFilmCritics: 0,
		},
		votes: {
			kp: 965187,
			imdb: 2798608,
			filmCritics: 82,
			russianFilmCritics: 1,
			await: 2,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
		},
		movieLength: 142,
		id: 326,
		name: 'Побег из Шоушенка',
		year: 1994,
		poster: {
			url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/orig',
			previewUrl:
				'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/x1000',
		},
		genres: [
			{
				name: 'драма',
			},
		],
		countries: [
			{
				name: 'США',
			},
		],
		videos: {
			trailers: [],
			teasers: [],
		},
		shortDescription:
			'Несправедливо осужденный банкир готовит побег из тюрьмы. Тим Роббинс в выдающейся экранизации Стивена Кинга',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/1648503/2a000001705c8bf514c033f1019473a4caae/orig',
		},
	},
	{
		rating: {
			kp: 8.098,
			imdb: 7.9,
			filmCritics: 8.3,
			russianFilmCritics: 90,
		},
		votes: {
			kp: 938685,
			imdb: 738666,
			filmCritics: 474,
			russianFilmCritics: 20,
			await: 9141,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/4HWAQu28e2yaWrtupFPGFkdNU7V.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/4HWAQu28e2yaWrtupFPGFkdNU7V.jpg',
		},
		movieLength: 130,
		id: 1188529,
		name: 'Достать ножи',
		year: 2019,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/1188529.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_1188529.jpg',
		},
		genres: [
			{
				name: 'детектив',
			},
			{
				name: 'комедия',
			},
			{
				name: 'драма',
			},
			{
				name: 'криминал',
			},
		],
		countries: [
			{
				name: 'США',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/Wi3wPg4IaeA',
					name: 'Достать ножи - Финальный трейлер',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/Wi3wPg4IaeA',
					name: 'Достать ножи - Финальный трейлер',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/qOg3AoRc4nI',
					name: 'Final Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/sL-9Khv7wa4',
					name: 'New Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/qGqiHJTsRkQ',
					name: 'Official Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Частный детектив ведет запутанное дело о смерти известного писателя. Криминальная комедия с Дэниэлом Крэйгом',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/2385704/2a00000176f1c6464b62d464e2e9ddd8dbb6/orig',
		},
	},
	{
		rating: {
			kp: 8.663,
			imdb: 8.8,
			filmCritics: 8.1,
			russianFilmCritics: 80.9524,
		},
		votes: {
			kp: 937915,
			imdb: 2461331,
			filmCritics: 367,
			russianFilmCritics: 21,
			await: 42545,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg',
		},
		movieLength: 148,
		id: 447301,
		name: 'Начало',
		year: 2010,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/447301.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_447301.jpg',
		},
		genres: [
			{
				name: 'фантастика',
			},
			{
				name: 'боевик',
			},
			{
				name: 'триллер',
			},
			{
				name: 'драма',
			},
			{
				name: 'детектив',
			},
		],
		countries: [
			{
				name: 'США',
			},
			{
				name: 'Великобритания',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/RlKr_lO45Nc',
					name: 'Начало (2010) — русский трейлер HD',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/RlKr_lO45Nc',
					name: 'Начало (2010) — русский трейлер HD',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/JE9z-gy4De4',
					name: 'Official New UK Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/Jvurpf91omw',
					name: 'Official Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Профессиональные воры внедряются в сон наследника огромной империи. Фантастический боевик Кристофера Нолана',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/200035/2a00000178c5fc5e63481655114331b766a3/orig',
		},
	},
	{
		rating: {
			kp: 9.074,
			imdb: 8.6,
			filmCritics: 6.8,
			russianFilmCritics: 0,
		},
		votes: {
			kp: 923556,
			imdb: 1360322,
			filmCritics: 136,
			russianFilmCritics: 1,
			await: 0,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg',
		},
		movieLength: 189,
		id: 435,
		name: 'Зеленая миля',
		year: 1999,
		poster: {
			url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/orig',
			previewUrl:
				'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/x1000',
		},
		genres: [
			{
				name: 'драма',
			},
			{
				name: 'фэнтези',
			},
			{
				name: 'криминал',
			},
		],
		countries: [
			{
				name: 'США',
			},
		],
		videos: {
			trailers: [],
			teasers: [],
		},
		shortDescription:
			'В тюрьме для смертников появляется заключенный с божественным даром. Мистическая драма по роману Стивена Кинга',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/239697/2a0000016f12f1eb8870b609ee94313774b2/orig',
		},
	},
	{
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/0IALFVo90K4',
					name: 'Иван Васильевич меняет профессию - трейлер',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/0IALFVo90K4',
					name: 'Иван Васильевич меняет профессию - трейлер',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		id: 42664,
		name: 'Иван Васильевич меняет профессию',
		rating: {
			kp: 8.785,
			imdb: 8.2,
			filmCritics: 0,
			russianFilmCritics: 0,
		},
		votes: {
			kp: 898155,
			imdb: 17541,
			filmCritics: 0,
			russianFilmCritics: 0,
			await: 0,
		},
		year: 1973,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/42664.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_42664.jpg',
		},
		genres: [
			{
				name: 'комедия',
			},
			{
				name: 'фантастика',
			},
			{
				name: 'приключения',
			},
		],
		countries: [
			{
				name: 'СССР',
			},
		],
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/z8125Gm4hadwQZOcFiZ7uor77E4.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/z8125Gm4hadwQZOcFiZ7uor77E4.jpg',
		},
		movieLength: 88,
		shortDescription:
			'Иван Грозный отвечает на телефон, пока его тезка-пенсионер сидит на троне. Советский хит о липовом государе',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/2439731/2a000001720d0315b85f00ffcf4f8472e93a/orig',
		},
	},
	{
		rating: {
			kp: 8.373,
			imdb: 8.1,
			filmCritics: 7.1,
			russianFilmCritics: 0,
		},
		votes: {
			kp: 886976,
			imdb: 1158059,
			filmCritics: 220,
			russianFilmCritics: 2,
			await: 0,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/wW7Wt5bXzPy4VOEE4LTIUDyDgBo.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/wW7Wt5bXzPy4VOEE4LTIUDyDgBo.jpg',
		},
		movieLength: 143,
		id: 4374,
		name: 'Пираты Карибского моря: Проклятие Черной жемчужины',
		year: 2003,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/4374.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_4374.jpg',
		},
		genres: [
			{
				name: 'фэнтези',
			},
			{
				name: 'боевик',
			},
			{
				name: 'приключения',
			},
		],
		countries: [
			{
				name: 'США',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/0xxLhqjbB2Y',
					name: 'Проклятие Чёрной жемчужины - Трейлер',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/0xxLhqjbB2Y',
					name: 'Проклятие Чёрной жемчужины - Трейлер',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/naQr0uTrH_s',
					name: 'Pirates of the Caribbean: The Curse of the Black Pearl Official Trailer 1 (2003) HD',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Пират нападает на армию мертвецов, чтобы вернуть свой корабль. Начало приключений Джека Воробья',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/236744/2a0000017a3448f7a52257d6b256bfc339e3/orig',
		},
	},
	{
		rating: {
			kp: 8.264,
			imdb: 7.6,
			filmCritics: 7.1,
			russianFilmCritics: 0,
		},
		votes: {
			kp: 886716,
			imdb: 813108,
			filmCritics: 200,
			russianFilmCritics: 2,
			await: 0,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/hziiv14OpD73u9gAak4XDDfBKa2.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/hziiv14OpD73u9gAak4XDDfBKa2.jpg',
		},
		movieLength: 152,
		id: 689,
		name: 'Гарри Поттер и философский камень',
		year: 2001,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/689.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_689.jpg',
		},
		genres: [
			{
				name: 'фэнтези',
			},
			{
				name: 'приключения',
			},
			{
				name: 'семейный',
			},
		],
		countries: [
			{
				name: 'Великобритания',
			},
			{
				name: 'США',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/ly3tLiu-bmc',
					name: 'Гарри Поттер и философский камень',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/TXB31YDIJwk',
					name: 'Гарри Поттер и философский камень - Трейлер',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/ly3tLiu-bmc',
					name: 'Гарри Поттер и философский камень',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/TXB31YDIJwk',
					name: 'Гарри Поттер и философский камень - Трейлер',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/k71hjl3zWsA',
					name: 'Trailer 3',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/Q61YhARNOPg',
					name: 'Trailer 2',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/PbdM1db3JbY',
					name: 'Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Гарри поступает в школу магии Хогвартс и заводит друзей. Первая часть большой франшизы о маленьком волшебнике',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/223007/2a0000017e127a46aa2122ff48cb306de98b/orig',
		},
	},
	{
		rating: {
			kp: 8.622,
			imdb: 8.7,
			filmCritics: 7.1,
			russianFilmCritics: 80.6452,
		},
		votes: {
			kp: 879269,
			imdb: 1925493,
			filmCritics: 375,
			russianFilmCritics: 31,
			await: 78051,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/pbrkL804c8yAv3zBZR4QPEafpAR.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/pbrkL804c8yAv3zBZR4QPEafpAR.jpg',
		},
		movieLength: 169,
		id: 258687,
		name: 'Интерстеллар',
		year: 2014,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/258687.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_258687.jpg',
		},
		genres: [
			{
				name: 'фантастика',
			},
			{
				name: 'драма',
			},
			{
				name: 'приключения',
			},
		],
		countries: [
			{
				name: 'США',
			},
			{
				name: 'Великобритания',
			},
			{
				name: 'Канада',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/qcPfI0y7wRU',
					name: 'Интерстеллар (Interstellar) -- дублированный трейлер',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/qcPfI0y7wRU',
					name: 'Интерстеллар (Interstellar) -- дублированный трейлер',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/0vxOhd4qlnA',
					name: 'Interstellar Movie - Official Trailer 3',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/LY19rHKAaAg',
					name: 'Interstellar – Trailer 4 – Official Warner Bros.',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/Rt2LHkSwdPQ',
					name: 'Interstellar Movie - Official Trailer 2',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/ePbKGoIGAXY',
					name: 'Interstellar – Trailer 3 – Official Warner Bros.',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/2LqzF5WauAw',
					name: 'Interstellar Movie - Official Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/zSWdZVtXT7E',
					name: 'Interstellar - Trailer - Official Warner Bros. UK',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/nyc6RJEEe0U',
					name: 'Interstellar Movie - Official Teaser',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/827FNDpQWrQ',
					name: 'Interstellar - Teaser Trailer - Official Warner Bros. UK',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Фантастический эпос про задыхающуюся Землю, космические полеты и парадоксы времени. «Оскар» за спецэффекты',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/2439731/2a0000016fae962c6bf6cc87fd2098ed9035/orig',
		},
	},
	{
		rating: {
			kp: 8.424,
			imdb: 8.2,
			filmCritics: 7.2,
			russianFilmCritics: 93.75,
		},
		votes: {
			kp: 864925,
			imdb: 532637,
			filmCritics: 364,
			russianFilmCritics: 16,
			await: 6866,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/2Xe9lISpwXKhvKiHttbFfVRERQX.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/2Xe9lISpwXKhvKiHttbFfVRERQX.jpg',
		},
		movieLength: 130,
		id: 1108577,
		name: 'Зеленая книга',
		year: 2018,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/1108577.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_1108577.jpg',
		},
		genres: [
			{
				name: 'биография',
			},
			{
				name: 'комедия',
			},
			{
				name: 'драма',
			},
		],
		countries: [
			{
				name: 'США',
			},
			{
				name: 'Китай',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/PyOdoIzVRk4',
					name: 'Зеленая книга - Русский трейлер (в кино с 24 января)',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/PyOdoIzVRk4',
					name: 'Зеленая книга - Русский трейлер (в кино с 24 января)',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/QkZxoko_HC0',
					name: 'Green Book - Official Trailer [HD]',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Путешествие итальянца-вышибалы и чернокожего пианиста по Америке 1960-х. «Оскар» за лучший фильм',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/223007/2a0000016e043a92a346ddf03b9f572b11d6/orig',
		},
	},
	{
		rating: {
			kp: 8.66,
			imdb: 8.8,
			filmCritics: 7.4,
			russianFilmCritics: 0,
		},
		votes: {
			kp: 859675,
			imdb: 2196031,
			filmCritics: 181,
			russianFilmCritics: 2,
			await: 0,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/hZkgoQYus5vegHoetLkCJzb17zJ.jpg',
		},
		movieLength: 139,
		id: 361,
		name: 'Бойцовский клуб',
		year: 1999,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/361.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_361.jpg',
		},
		genres: [
			{
				name: 'триллер',
			},
			{
				name: 'драма',
			},
			{
				name: 'криминал',
			},
		],
		countries: [
			{
				name: 'США',
			},
			{
				name: 'Германия',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/6JnN1DmbqoU',
					name: 'Fight Club - Theatrical Trailer Remastered in HD',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/BdJKm16Co6M',
					name: '#TBT Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/6JnN1DmbqoU',
					name: 'Fight Club - Theatrical Trailer Remastered in HD',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/BdJKm16Co6M',
					name: '#TBT Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Страховой работник разрушает рутину своей благополучной жизни. Культовая драма по книге Чака Паланика',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/239697/2a00000173c3126e043a7edfc591ded6c0c6/orig',
		},
	},
	{
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/GPffK9Ap71E',
					name: 'Брат 2 - Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/GPffK9Ap71E',
					name: 'Брат 2 - Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		id: 41520,
		name: 'Брат 2',
		rating: {
			kp: 8.183,
			imdb: 7.6,
			filmCritics: 0,
			russianFilmCritics: 0,
		},
		votes: {
			kp: 854735,
			imdb: 16289,
			filmCritics: 0,
			russianFilmCritics: 1,
			await: 0,
		},
		year: 2000,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/41520.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_41520.jpg',
		},
		genres: [
			{
				name: 'боевик',
			},
			{
				name: 'криминал',
			},
		],
		countries: [
			{
				name: 'Россия',
			},
			{
				name: 'США',
			},
		],
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/a8bPE7ufmXsfj2BLOrB8KuNMxN5.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/a8bPE7ufmXsfj2BLOrB8KuNMxN5.jpg',
		},
		movieLength: 127,
		shortDescription:
			'Американцы знакомятся с Данилой Багровым и узнают, в чем сила. Сиквел о герое времени с мощным рок-саундтреком\n',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/1652588/2a0000016f12f895b05320538df47aca46c8/orig',
		},
	},
	{
		rating: {
			kp: 8.919,
			imdb: 8.8,
			filmCritics: 7.5,
			russianFilmCritics: 0,
		},
		votes: {
			kp: 831901,
			imdb: 2145326,
			filmCritics: 107,
			russianFilmCritics: 1,
			await: 6,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/qdIMHd4sEfJSckfVJfKQvisL02a.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/qdIMHd4sEfJSckfVJfKQvisL02a.jpg',
		},
		movieLength: 142,
		id: 448,
		name: 'Форрест Гамп',
		year: 1994,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/448.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_448.jpg',
		},
		genres: [
			{
				name: 'драма',
			},
			{
				name: 'комедия',
			},
			{
				name: 'мелодрама',
			},
			{
				name: 'история',
			},
			{
				name: 'военный',
			},
		],
		countries: [
			{
				name: 'США',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/2mQAhwPKCuU',
					name: 'Форрест Гамп - Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/2mQAhwPKCuU',
					name: 'Форрест Гамп - Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/76WeEuR0qk4',
					name: 'Forrest Gump (1994) Original Trailer [FHD]',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/Mj9IA9tTfio',
					name: 'Official 25th Anniversary Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/bLvqoHBptjg',
					name: 'Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Полувековая история США глазами чудака из Алабамы. Абсолютная классика Роберта Земекиса с Томом Хэнксом',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/200035/2a00000170ed554ce17a2db2b2cfdc134a6c/orig',
		},
	},
	{
		rating: {
			kp: 8.705,
			imdb: 8.5,
			filmCritics: 0,
			russianFilmCritics: 0,
		},
		votes: {
			kp: 824417,
			imdb: 14080,
			filmCritics: 0,
			russianFilmCritics: 0,
			await: 0,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/k9r86oHFo06ZC21zw2FkRD9wcJX.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/k9r86oHFo06ZC21zw2FkRD9wcJX.jpg',
		},
		movieLength: 95,
		id: 42782,
		name: 'Операция «Ы» и другие приключения Шурика',
		year: 1965,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/42782.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_42782.jpg',
		},
		genres: [
			{
				name: 'комедия',
			},
			{
				name: 'мелодрама',
			},
			{
				name: 'криминал',
			},
		],
		countries: [
			{
				name: 'СССР',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/mBhmv49uY_o',
					name: 'Операция «Ы» и другие приключения Шурика - Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/mBhmv49uY_o',
					name: 'Операция «Ы» и другие приключения Шурика - Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Похождения хронически оптимистичного очкарика. Блистательная комедия Леонида Гайдая',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/1672343/2a0000017332fcfc4b1e6bfe848bcfd44dfe/orig',
		},
	},
	{
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/3a-k15P_IZ0',
					name: 'ОСТРОВ ПРОКЛЯТЫХ в кино с 14 августа',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/3a-k15P_IZ0',
					name: 'ОСТРОВ ПРОКЛЯТЫХ в кино с 14 августа',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/qdPw9x9h5CY',
					name: 'Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		id: 397667,
		name: 'Остров проклятых',
		rating: {
			kp: 8.515,
			imdb: 8.2,
			filmCritics: 6.7,
			russianFilmCritics: 85.7143,
		},
		votes: {
			kp: 819569,
			imdb: 1368017,
			filmCritics: 263,
			russianFilmCritics: 7,
			await: 22948,
		},
		year: 2009,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/397667.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_397667.jpg',
		},
		genres: [
			{
				name: 'триллер',
			},
			{
				name: 'детектив',
			},
			{
				name: 'драма',
			},
		],
		countries: [
			{
				name: 'США',
			},
		],
		shortDescription:
			'Пристав оказывается заложником клиники для умалишенных. Сложносочиненный детектив с Леонардо ДиКаприо',
		movieLength: 138,
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/2nqsOT2AqPkTW81bWaLRtjgjqVM.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/2nqsOT2AqPkTW81bWaLRtjgjqVM.jpg',
		},
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/2419418/2a0000016eadd14d677a2285a8ffa7e27974/orig',
		},
	},
	{
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/k_nJz_15Mwo',
					name: 'Любовь и голуби - Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/k_nJz_15Mwo',
					name: 'Любовь и голуби - Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		id: 45146,
		name: 'Любовь и голуби',
		rating: {
			kp: 8.288,
			imdb: 7.9,
			filmCritics: 0,
			russianFilmCritics: 0,
		},
		votes: {
			kp: 814951,
			imdb: 5237,
			filmCritics: 0,
			russianFilmCritics: 0,
			await: 0,
		},
		year: 1984,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/45146.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_45146.jpg',
		},
		genres: [
			{
				name: 'мелодрама',
			},
			{
				name: 'комедия',
			},
		],
		countries: [
			{
				name: 'СССР',
			},
		],
		movieLength: 107,
		shortDescription:
			'Вася пытается заслужить прощения у семьи. Мощнейший актерский состав под руководством Владимира Меньшова',
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/yZIjfRdBOjOXK6X46IuvmGn7zJE.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/yZIjfRdBOjOXK6X46IuvmGn7zJE.jpg',
		},
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/2385704/2a000001720d95c11088788d9e2be6562e66/orig',
		},
	},
	{
		rating: {
			kp: 8.067,
			imdb: 8.4,
			filmCritics: 7.6,
			russianFilmCritics: 86.3636,
		},
		votes: {
			kp: 806040,
			imdb: 1151059,
			filmCritics: 491,
			russianFilmCritics: 22,
			await: 77949,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg',
		},
		movieLength: 149,
		id: 843649,
		name: 'Мстители: Война бесконечности',
		year: 2018,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/843649.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_843649.jpg',
		},
		genres: [
			{
				name: 'фантастика',
			},
			{
				name: 'боевик',
			},
			{
				name: 'приключения',
			},
		],
		countries: [
			{
				name: 'США',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/k_OjiuHhvHo',
					name: 'Мстители 3: Война Бесконечности — Русский трейлер #2 (4К, 2018)',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/k_OjiuHhvHo',
					name: 'Мстители 3: Война Бесконечности — Русский трейлер #2 (4К, 2018)',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/QwievZ1Tx-8',
					name: 'Official Trailer #2',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/6ZfuNTqbHE8',
					name: 'Official Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Титан Танос вынашивает страшный план — угрозу всей Вселенной. Предпоследний фильм о суперкоманде Marvel',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/2439731/2a00000178c586374cd541732e2109769c2d/orig',
		},
	},
	{
		rating: {
			kp: 8.384,
			imdb: 7.9,
			filmCritics: 8,
			russianFilmCritics: 0,
		},
		votes: {
			kp: 784297,
			imdb: 1225046,
			filmCritics: 251,
			russianFilmCritics: 1,
			await: 0,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/rzdPqYx7Um4FUZeD8wpXqjAUcEm.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/rzdPqYx7Um4FUZeD8wpXqjAUcEm.jpg',
		},
		movieLength: 194,
		id: 2213,
		name: 'Титаник',
		year: 1997,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/2213.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_2213.jpg',
		},
		genres: [
			{
				name: 'мелодрама',
			},
			{
				name: 'история',
			},
			{
				name: 'триллер',
			},
			{
				name: 'драма',
			},
		],
		countries: [
			{
				name: 'США',
			},
			{
				name: 'Мексика',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/wV5lSmXtkH4',
					name: 'трейлер новой версии шедевра ТИТАНИК, в кино везде, кроме России',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/pMmM07sy-hI',
					name: 'Фильм "ТИТАНИК" (1997) - Русский трейлер (HD) | В Рейтинге',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/neE-3WGBgHo',
					name: 'Титаник - Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/wV5lSmXtkH4',
					name: 'трейлер новой версии шедевра ТИТАНИК, в кино везде, кроме России',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/pMmM07sy-hI',
					name: 'Фильм "ТИТАНИК" (1997) - Русский трейлер (HD) | В Рейтинге',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/neE-3WGBgHo',
					name: 'Титаник - Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/wO44qBPBG4c',
					name: '25th Anniversary UK Trailer [Audio Described]',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/oHY7D7K58BM',
					name: '25th Anniversary Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/cIJ8ma0kKtY',
					name: 'Dolby Vision Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/CHekzSiZjrY',
					name: 'Throwback Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Запретная любовь на фоне гибели легендарного лайнера. Великий фильм-катастрофа — в отреставрированной версии',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/223007/2a000001729e8bc06ab8fbd24ff28cf4e297/orig',
		},
	},
	{
		rating: {
			kp: 7.849,
			imdb: 8.4,
			filmCritics: 8.2,
			russianFilmCritics: 70.5882,
		},
		votes: {
			kp: 760593,
			imdb: 1209825,
			filmCritics: 555,
			russianFilmCritics: 17,
			await: 96308,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
		},
		movieLength: 181,
		id: 843650,
		name: 'Мстители: Финал',
		year: 2019,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/843650.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_843650.jpg',
		},
		genres: [
			{
				name: 'фантастика',
			},
			{
				name: 'боевик',
			},
			{
				name: 'драма',
			},
			{
				name: 'приключения',
			},
		],
		countries: [
			{
				name: 'США',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/Mnk45vViiis',
					name: 'Трейлер №2',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/gbcVZgO4n4E',
					name: 'Трейлер №1',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/Mnk45vViiis',
					name: 'Трейлер №2',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/gbcVZgO4n4E',
					name: 'Трейлер №1',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/AMSITikqKiM',
					name: 'Policy Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/TcMBFSGVi1c',
					name: 'Official Trailer 2',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/hA6hldpSTF8',
					name: 'Official Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Железный человек, Тор и другие пытаются переиграть Таноса. Эпохальное завершение супергеройской франшизы',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/1534341/2a00000176f208a7a61cc08d59dec87c9876/orig',
		},
	},
	{
		rating: {
			kp: 8.646,
			imdb: 8.9,
			filmCritics: 9.2,
			russianFilmCritics: 100,
		},
		votes: {
			kp: 719995,
			imdb: 2117774,
			filmCritics: 115,
			russianFilmCritics: 7,
			await: 1,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
		},
		movieLength: 154,
		id: 342,
		name: 'Криминальное чтиво',
		year: 1994,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/342.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_342.jpg',
		},
		genres: [
			{
				name: 'криминал',
			},
			{
				name: 'драма',
			},
		],
		countries: [
			{
				name: 'США',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/2fUuQsLcJVw',
					name: 'Криминальное чтиво / Pulp Fiction 1994 Русский трейлер HD',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/VHDmVv8fg1k',
					name: 'Криминальное Чтиво - Трейлер',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/2fUuQsLcJVw',
					name: 'Криминальное чтиво / Pulp Fiction 1994 Русский трейлер HD',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/VHDmVv8fg1k',
					name: 'Криминальное Чтиво - Трейлер',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/tGpTpVyI_OQ',
					name: 'Official Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Несколько связанных историй из жизни бандитов. Шедевр Квентина Тарантино, который изменил мировое кино',
		logo: {
			url: 'https://imagetmdb.com/t/p/original/inuYhCBbTof4gw7f9Ized0SQQuW.png',
		},
	},
	{
		rating: {
			kp: 7.671,
			imdb: 8,
			filmCritics: 7.6,
			russianFilmCritics: 72,
		},
		votes: {
			kp: 706364,
			imdb: 711285,
			filmCritics: 498,
			russianFilmCritics: 25,
			await: 89720,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg',
		},
		movieLength: 155,
		id: 409424,
		name: 'Дюна',
		year: 2021,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/409424.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_409424.jpg',
		},
		genres: [
			{
				name: 'фантастика',
			},
			{
				name: 'боевик',
			},
			{
				name: 'драма',
			},
			{
				name: 'приключения',
			},
		],
		countries: [
			{
				name: 'США',
			},
			{
				name: 'Канада',
			},
			{
				name: 'Венгрия',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/Q6nepw3fskg',
					name: 'Дюна | Основной Трейлер | В кино с 14 октября',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/DOlTmIhEsg0',
					name: 'Дюна - официальный трейлер',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/Q6nepw3fskg',
					name: 'Дюна | Основной Трейлер | В кино с 14 октября',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/DOlTmIhEsg0',
					name: 'Дюна - официальный трейлер',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/w0HgHet0sxg',
					name: 'Final Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/8g18jFHCLXk',
					name: 'Official Main Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/n9xhJrPXop4',
					name: 'Official Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Атрейдесы прибывают на планету, где им никто не рад. Фантастический эпос Дени Вильнёва с шестью «Оскарами»',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/1534341/2a0000017ede1a0d9f8bae88b8f757431b94/orig',
		},
	},
	{
		rating: {
			kp: 7.846,
			imdb: 8,
			filmCritics: 7.8,
			russianFilmCritics: 83.3333,
		},
		votes: {
			kp: 705267,
			imdb: 1225685,
			filmCritics: 338,
			russianFilmCritics: 18,
			await: 46215,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/uLtVbjvS1O7gXL8lUOwsFOH4man.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/uLtVbjvS1O7gXL8lUOwsFOH4man.jpg',
		},
		movieLength: 121,
		id: 689066,
		name: 'Стражи Галактики',
		year: 2014,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/689066.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_689066.jpg',
		},
		genres: [
			{
				name: 'фантастика',
			},
			{
				name: 'боевик',
			},
			{
				name: 'приключения',
			},
			{
				name: 'комедия',
			},
		],
		countries: [
			{
				name: 'США',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/CX5mkRMHsZ8',
					name: 'Стражи галактики - Трейлер',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/CX5mkRMHsZ8',
					name: 'Стражи галактики - Трейлер',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/3CqymRQ1uUU',
					name: 'Guardians of the Galaxy trailer 2 UK -- Marvel | HD',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/2LIQ2-PZBC8',
					name: "Marvel's Guardians of the Galaxy - Trailer 2 (OFFICIAL)",
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/d96cjJhvlMA',
					name: "Marvel's Guardians of the Galaxy - Trailer 1 (OFFICIAL)",
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/b7yOuhI1dzU',
					name: 'Guardians Of The Galaxy trailer UK -- Official Marvel | HD',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Питер Квилл и горстка неземных лузеров спасают артефакт. Крис Пратт в фильме Джеймса Ганна по комиксу Marvel',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/2385704/2a0000016e11e92154e4c2189debbfb0af18/orig',
		},
	},
	{
		rating: {
			kp: 7.991,
			imdb: 7.4,
			filmCritics: 6.4,
			russianFilmCritics: 75,
		},
		votes: {
			kp: 697296,
			imdb: 591071,
			filmCritics: 202,
			russianFilmCritics: 8,
			await: 19262,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/vQGo5VjJcHxpzIa8lMBFzpAth1w.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/vQGo5VjJcHxpzIa8lMBFzpAth1w.jpg',
		},
		movieLength: 105,
		id: 462606,
		name: 'Области тьмы',
		year: 2011,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/462606.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_462606.jpg',
		},
		genres: [
			{
				name: 'триллер',
			},
			{
				name: 'драма',
			},
			{
				name: 'фантастика',
			},
		],
		countries: [
			{
				name: 'США',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/6d1Uc68wt3c',
					name: "'Limitless' Trailer HD",
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/6d1Uc68wt3c',
					name: "'Limitless' Trailer HD",
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'Чудодейственные таблетки выводят писателя из кризиса. Триллер о том, что сверхсила не обходится без побочек',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/2385704/2a0000016e4af6c2eb6d8d847857255fe628/orig',
		},
	},
	{
		rating: {
			kp: 7.517,
			imdb: 7.5,
			filmCritics: 7.3,
			russianFilmCritics: 94.7368,
		},
		votes: {
			kp: 695233,
			imdb: 769223,
			filmCritics: 388,
			russianFilmCritics: 19,
			await: 69980,
		},
		backdrop: {
			url: 'https://imagetmdb.com/t/p/original/qUv51IFUvVRAP2379ThmA3eLJx6.jpg',
			previewUrl:
				'https://imagetmdb.com/t/p/w500/qUv51IFUvVRAP2379ThmA3eLJx6.jpg',
		},
		movieLength: 115,
		id: 409600,
		name: 'Доктор Стрэндж',
		year: 2016,
		poster: {
			url: 'https://st.kp.yandex.net/images/film_big/409600.jpg',
			previewUrl:
				'https://st.kp.yandex.net/images/film_iphone/iphone360_409600.jpg',
		},
		genres: [
			{
				name: 'фантастика',
			},
			{
				name: 'фэнтези',
			},
			{
				name: 'боевик',
			},
			{
				name: 'приключения',
			},
		],
		countries: [
			{
				name: 'США',
			},
		],
		videos: {
			trailers: [
				{
					url: 'https://www.youtube.com/embed/sldPIEJ7jZw',
					name: 'Доктор Стрэндж - Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/6SlCZgygmbs',
					name: 'Доктор Стрэндж - второй трейлер',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/sldPIEJ7jZw',
					name: 'Доктор Стрэндж - Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/6SlCZgygmbs',
					name: 'Доктор Стрэндж - второй трейлер',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/HSzx-zryEgM',
					name: 'Official Trailer 2',
					site: 'youtube',
					type: 'TRAILER',
				},
				{
					url: 'https://www.youtube.com/embed/Lt-U_t2pUHI',
					name: 'Teaser Trailer',
					site: 'youtube',
					type: 'TRAILER',
				},
			],
			teasers: [],
		},
		shortDescription:
			'После автокатастрофы хирург становится верховным защитником Земли. В роли супергероя — Бенедикт Камбербэтч',
		logo: {
			url: 'https://avatars.mds.yandex.net/get-ott/2419418/2a0000016e043b6ca119c3a776483a7d95f8/orig',
		},
	},
]

/**[
	{
		id: 1,
		name: 'Русалочка',
		poster: {
			url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/292d6869-8aa5-4f87-a3a5-4e3bd846cfc3/300x450',
		},

		backdrop: {
			url: 'https://avatars.mds.yandex.net/i?id=2e2fb44ddfd794b9dd31246170fe09eb_l-8219252-images-thumbs&n=13',
		},
		year: 2023,
		ageLimit: 12,
		movieLength: '134 мин',
		genres: ['Романтика'],
		shortDescription:
			'Русалочку Ариэль, одну из дочерей морского царя Тритона, ужасно интересует человечество. Несмотря на неодобрение отца, она поднимается к поверхности и спасает попавшего в кораблекрушение принца Эрика. Узнав об этом, Тритон приходит в ярость и навсегда запрещает дочери покидать морское дно — этим и решает воспользоваться морская ведьма Урсула. В обмен на голос она даёт Ариэль ноги, но у девушки есть только три дня: если к закату третьего дня она не разделит с Эриком поцелуй настоящей любви, то навсегда попадёт в собственность ведьмы.',
	},
	{
		id: 2,
		name: '65',
		backdrop: {
			url: 'https://avatars.mds.yandex.net/i?id=8ceef8d84620c97078ca72cfed2cb286_l-8804196-images-thumbs&n=13',
		},
		poster: {
			url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/10893610/0e8e2384-e4eb-42e6-ae96-a42b21919fd3/300x450',
		},
		year: 2023,
		ageLimit: 18,
		movieLength: '93 мин',
		genres: ['Фантастика', 'боевик'],
		shortDescription:
			'Чтобы заработать на лечение дочери, семьянин Миллс с планеты Сомарис берётся за разведывательную миссию продолжительностью в два года. В пути его корабль попадает в необозначенный на картах пояс астероидов и терпит крушение, развалившись на части на неизвестной планете. Миллс обнаруживает единственную выжившую из находившихся в криостазе пассажиров, 12-летнюю Коа, а также выясняет, что местность таит смертельную опасность — ведь они оказались на Земле 65 миллионов лет назад. Но шанс на спасение всё же есть, а для этого Миллсу и Коа нужно добраться до спасательного корабля, который застрял на вершине горы.',
	},
	{
		id: 3,
		name: 'Нечто. Монстр из глубин',
		backdrop: {
			url: 'https://avatars.mds.yandex.net/i?id=1ad9f9f829191083db4fc3ba2e735584_l-5348026-images-thumbs&n=13',
		},
		poster: {
			url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/ea7242bb-09d2-4b0c-b858-04045a56e293/300x450',
		},
		year: 2023,
		ageLimit: 18,
		movieLength: '100 мин',
		genres: ['Ужасы'],
		shortDescription:
			'1978 год. После смерти матери внезапно узнав, что получил в наследство дом на морском побережье, Бен с женой и маленькой дочерью едет из Калифорнии в Орегон, чтобы оценить потенциал недвижимости. Рядом с домом обнаруживается выдолбленный в породе резервуар, и, пока семейство приводит жилище в порядок, в глубинах пещер пробуждается нечто.',
	},
	{
		id: 4,
		name: 'Мегалодон',
		backdrop: {
			url: 'https://avatars.mds.yandex.net/i?id=a33504f06e23358f0e1e5009ea5028ff_l-10375548-images-thumbs&n=13',
		},
		poster: {
			url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/819695e8-2ac9-496d-830e-edfaa166981b/300x450',
		},
		year: 2023,
		ageLimit: 18,
		movieLength: '120 мин',
		genres: ['Ужасы', 'фантастика', 'триллер'],
		shortDescription:
			'Пол и его семья собираются провести отпуск в райском местечке на побережье. К их удивлению, живописный и дружелюбный поселок покинут и разрушен. По ацтекским легендам, в местных водах обитает последний мегалодон — Черный демон. Он ревностно защищает природу от вторжения людей, уничтожая все на своем пути. Отправившись на прибрежную платформу в поисках ответов, семья оказывается в ловушке. И теперь Полу нужно найти способ спасти своих близких.',
	},
	{
		id: 5,
		name: 'Переводчик ',
		backdrop: {
			url: 'https://avatars.mds.yandex.net/i?id=bdf1003c96e6149ab8a686bebdacc0ee_l-7904411-images-thumbs&n=13',
		},
		poster: {
			url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/5c775217-8796-4c7a-aba8-e4c6d48a6c36/300x450',
		},
		year: 2022,
		ageLimit: 18,
		movieLength: '170 мин',
		genres: ['Боевик', 'триллер', 'военный', 'история', 'драма'],
		shortDescription:
			'Афганистан, март 2018 года. Во время спецоперации по поиску оружия талибов отряд сержанта армии США Джона Кинли попадает в засаду. В живых остаются только сам Джон, получивший ранение, и местный переводчик Ахмед, который сотрудничает с американцами. Очнувшись на родине, Кинли не помнит, как ему удалось выжить, но понимает, что именно Ахмед спас ему жизнь, протащив на себе через опасную территорию. Теперь чувство вины не даёт Джону покоя, и он решает вернуться за Ахмедом и его семьёй, которых в Афганистане усиленно ищут талибы.',
	},
] */
