import * as API from '../api/apiMovieDB.jsx';
import { useState, useEffect } from 'react';

export const useSearchMovies = input => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const func = async () => {
      const ret = await API.searchMovies(input);

      setMovies(ret);
    };
    func();
  }, [input]);

  return { movies };
};
