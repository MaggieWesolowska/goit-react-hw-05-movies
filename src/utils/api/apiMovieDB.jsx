import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=11517d6931d2b5137dd13eb45c72b984';

export const getTrending = async () => {
	const response = await axios.get(
		`/trending/movie/day${API_KEY}`
	);
	return response.data.results.map(({ id, title }) => {
		return { id, title };
	});
};
