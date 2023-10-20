import axios from 'axios'

export async function fetchPlayer(id: number, setPlayer: any) {
	const res = await axios.get(
		'https://kinobox.tv/api/players/main?kinopoisk=' + id
	)
	const data: any[] = res.data
	setPlayer(data)
}
