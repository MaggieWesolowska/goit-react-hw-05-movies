import * as API from '../api/apiMovieDB.jsx';
import { useState, useEffect } from 'react';

export const useMovieCredits = movieId => {
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    const movieCredits = async () => {
      const ret = await API.getMovieCredits(movieId);

      setMovieCredits(ret);
    };
    movieCredits();
  }, [movieId]);

  return { movieCredits };
};
