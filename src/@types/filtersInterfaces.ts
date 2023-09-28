export enum sortEnum {
	RATING = 'rating',
	NAME = 'name',
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
