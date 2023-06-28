import * as API from '../api/apiMoviedb';
import { useState, useEffect } from 'react';

export const useMovieDetails = movieId => {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const movieDetails = async () => {
      const ret = await API.getMovieDetails(movieId);

      setMovieDetails(ret);
    };
    movieDetails();
  }, [movieId]);

  return { movieDetails };
};
