export enum sortEnum {
	RATING = 'rating.kp',
	NAME = 'name',
	POPULARITY = 'votes.kp',
}

export interface activeSortType {
	sortName: string
	sort: sortEnum
}

export interface IFilter {
	title: string
	active: string
	all: string[]
}
