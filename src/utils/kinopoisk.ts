import {
	KinopoiskDev,
	MovieQueryBuilder,
} from '@openmoviedb/kinopoiskdev_client'

interface IKinopoisk {
	kp: KinopoiskDev
	queryBuilder: MovieQueryBuilder
}

export const getKinopoisk = () => {
	const kinopoisk: IKinopoisk = {
		kp: new KinopoiskDev('1GC0C84-5Y14HKD-G1CAPDX-NHMR5YP'),
		queryBuilder: new MovieQueryBuilder(),
	}

	return kinopoisk
}
