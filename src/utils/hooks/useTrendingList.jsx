import * as API from '../api/apiMovieDB.jsx';
import { useState, useEffect } from 'react';

export const useTrendingList = () => {
  const [trendingMovies, setMovies] = useState([]);

  useEffect(() => {
    const func = async () => {
      const ret = await API.getTrending();

      setMovies(ret);
    };
    func();
  }, []);

  return { trendingMovies };
};
