import React, { FC, useEffect } from 'react'
import { serialsFilterData } from '../../data/serialsFiltersData'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
	getSerialFilters,
	updateSerialsFilters,
} from '../../utils/updateFetchSerials'
import SerialFilter from './SerialFilter'

const SerialFilters: FC = () => {
	const dispatch = useAppDispatch()
	const serialFilters = useAppSelector(state => state.serialFilters)

	useEffect(() => {
		getSerialFilters(dispatch)
	}, [])

	useEffect(() => {
		updateSerialsFilters(serialFilters)
	}, [serialFilters])

	return (
		<div className='serials__filters'>
			{serialsFilterData.map((item, index) => (
				<SerialFilter key={index} item={item} />
			))}
		</div>
	)
}

export default React.memo(SerialFilters)
