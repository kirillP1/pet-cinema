import axios from 'axios'
import { IPlayer } from '../data/filmsLocalData'

export async function fetchPlayer(id: number, setPlayer: (data: any) => void) {
	const res = await axios.get(
		'https://kinobox.tv/api/players/main?kinopoisk=' + id
	)
	const data: IPlayer[] = res.data
	setPlayer(data)
}
