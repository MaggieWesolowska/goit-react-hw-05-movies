import * as API from '../api/apiMoviedb';
import { useState, useEffect } from 'react';

const useMovieCredits = movieId => {
	const [movieCredits, setMovieCredits] = useState([]);

	useEffect(() => {
		API.getMovieCredits(movieId).then(ret =>
			setMovieCredits(ret)
		);
	}, [movieId]);
	return { movieCredits };
};

export default useMovieCredits;
