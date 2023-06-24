import * as API from '../api/apiMoviedb';
import { useState, useEffect } from 'react';

const useSearchMovies = input => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		API.searchMovies(input).then(ret => setMovies(ret));
	}, [input]);
	return { movies };
};

export default useSearchMovies;
