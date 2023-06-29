import {
  Outlet,
  Link,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useMovieDetails } from '../../utils/hooks/useMovieDetails';
import css from '../MovieDetails/MovieDetails.module.css';
import placeholder from '../../Assets/Images/placeholder.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { movieDetails } = useMovieDetails(movieId);

  const location = useLocation();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(location.state.from);
  };

  return (
    <div>
      <button
        className={css.backBtn}
        type='button'
        onClick={handleGoBack}>
        Back
      </button>
      <h2 className={css.movieTitle}>
        {movieDetails.title} (
        {movieDetails.release_date
          ? movieDetails.release_date.substring(0, 4)
          : ''}
        )
      </h2>
      <div className={css.imgBox}>
        <img
          className={css.movieImg}
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`
              : `${placeholder}`
          }
          alt={movieDetails.original_title}
        />
      </div>

      <h3 className={css.movieInfo}>
        User Score:{' '}
        {movieDetails.vote_average
          ? Math.fround(
              movieDetails.vote_average * 10
            ).toFixed(0)
          : ''}
        %
      </h3>
      <h3 className={css.movieInfo}>Overview</h3>
      <p className={css.movieText}>
        {movieDetails.overview}
      </p>

      <h3 className={css.movieInfo}>Genres</h3>
      <p className={css.movieText}>
        {movieDetails.genres
          ? movieDetails.genres
              .map(genre => genre.name)
              .join(' ')
          : ''}
      </p>

      <h3 className={css.movieAdd}>
        Additional information
      </h3>

      <ul className={css.infoList}>
        <li>
          <Link
            className={css.movieLink}
            to='cast'
            state={{ from: location.state.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link
            className={css.movieLink}
            to='reviews'
            state={{ from: location.state.from }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
