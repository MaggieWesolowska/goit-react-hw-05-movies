import * as API from '../api/apiMoviedb';
import { useState, useEffect } from 'react';

const useMovieDetails = movieId => {
	const [movieDetails, setMovieDetails] = useState([]);

	useEffect(() => {
		API.getMovieDetails(movieId).then(
			movieDetailsReturnedFromApi =>
				setMovieDetails(movieDetailsReturnedFromApi)
		);
	}, [movieId]);

	return { movieDetails };
};

export default useMovieDetails;
