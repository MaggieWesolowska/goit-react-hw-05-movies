import * as API from '../api/apiMovieDB.jsx';
import { useState, useEffect } from 'react';

export const useSearchMovies = input => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      const ret = await API.searchMovies(input);

      setMovies(ret);
    };
    searchMovies();
  }, [input]);

  return { movies };
};
