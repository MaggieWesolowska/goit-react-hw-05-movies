import * as API from './api/apiMoviedb';
import { useState, useEffect } from 'react';

const useTrendingList = () => {
	const [trendingMovies, setMovies] = useState([]);

	useEffect(() => {
		API.getTrending().then(ret => setMovies(ret));
	}, []);

	return { trendingMovies };
};

export default useTrendingList;
