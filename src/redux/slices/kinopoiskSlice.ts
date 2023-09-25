import { PayloadAction, createSlice } from '@reduxjs/toolkit'

/*export const fetchKinopoisk = createAsyncThunk(
	'kinopoisk/fetchKinopoisk',
	async (params, thunkApi) => {
		const kp = new KinopoiskDev('1GC0C84-5Y14HKD-G1CAPDX-NHMR5YP')
		const queryBuilder = new MovieQueryBuilder()
		const query = queryBuilder
			.select(['id', 'name', 'poster'])
			.filterExact('poster.url', SPECIAL_VALUE.NOT_NULL)
			.build()
		const { data, error, message } = await kp.movie.getBySearchQuery(query)
		console.log('slice', data)

		if (data?.docs.length === 0 || !data) {
			return thunkApi.rejectWithValue('Ничего не найдено')
		}
		return thunkApi.fulfillWithValue(data)
	}
)*/

export enum statusLoadingEnum {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

const initialState = {
	items: <any>[],
	status: statusLoadingEnum.LOADING, // loading | success | error
}

const kinopoiskSlice = createSlice({
	name: 'kinopoisk',
	initialState,
	reducers: {
		kinopoiskFetching(state) {
			state.status = statusLoadingEnum.LOADING
		},
		kinopoiskFetchingSuccess(state, action: PayloadAction<any[]>) {
			state.items = action.payload
			state.status = statusLoadingEnum.SUCCESS
		},
		kinopoiskFetchingError(state, action: PayloadAction<string>) {
			console.log('Error:', action.payload)

			state.items = []
			state.status = statusLoadingEnum.ERROR
		},
	},
})

export const {
	kinopoiskFetching,
	kinopoiskFetchingSuccess,
	kinopoiskFetchingError,
} = kinopoiskSlice.actions
export default kinopoiskSlice.reducer
