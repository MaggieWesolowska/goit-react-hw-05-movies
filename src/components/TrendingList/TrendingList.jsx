import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from '../TrendingList/TrendingList.module.css';

const TrendingList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={css.trending}>
        {movies.map(movie => (
          <li className={css.trendingMovie} key={movie.id}>
            <Link
              className={css.link}
              to={`/movies/${movie.id}`}
              state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingList;
