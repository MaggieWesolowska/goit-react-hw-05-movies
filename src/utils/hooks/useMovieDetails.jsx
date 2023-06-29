import * as API from '../api/apiMovieDB.jsx';
import { useState, useEffect } from 'react';

export const useMovieDetails = movieId => {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const func = async () => {
      const ret = await API.getMovieDetails(movieId);

      setMovieDetails(ret);
    };
    func();
  }, [movieId]);

  return { movieDetails };
};
