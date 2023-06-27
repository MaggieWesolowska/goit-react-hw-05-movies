import * as API from '../api/apiMoviedb';
import { useState, useEffect } from 'react';

export const useTrendingList = () => {
	const [trendingMovies, setMovies] = useState([]);

	useEffect(() => {
		const useTrending = async () => {
			const ret = await API.getTrending();

			setMovies(ret);
		};
		useTrending();
	}, []);

	return { trendingMovies };
};
