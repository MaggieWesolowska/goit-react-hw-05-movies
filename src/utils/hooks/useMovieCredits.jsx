import * as API from '../api/apiMovieDB.jsx';
import { useState, useEffect } from 'react';

export const useMovieCredits = movieId => {
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    const func = async () => {
      const ret = await API.getMovieCredits(movieId);

      setMovieCredits(ret);
    };
    func();
  }, [movieId]);

  return { movieCredits };
};
