import * as API from '../api/apiMovieDB.jsx';
import { useState, useEffect } from 'react';

export const useMovieReviews = movieId => {
  const [movieReviews, setReviews] = useState([]);

  useEffect(() => {
    const func = async () => {
      const ret = await API.getMovieReviews(movieId);

      setReviews(ret);
    };
    func();
  }, [movieId]);

  return { movieReviews };
};
