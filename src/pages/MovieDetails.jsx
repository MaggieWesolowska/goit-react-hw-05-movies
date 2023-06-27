import {
	Outlet,
	Link,
	useParams,
	useLocation,
	useNavigate,
} from 'react-router-dom';
import { useMovieDetails } from '../utils/hooks/useMovieDetails';
import css from '../components/SearchMovie/SearchMovie.module.css';

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
				className={css.searchBtn}
				type="button"
				onClick={handleGoBack}>
				Go back
			</button>
			<h2>
				{movieDetails.title} (
				{movieDetails.release_date
					? movieDetails.release_date.substring(0, 4)
					: ''}
				)
			</h2>

			<img
				src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
				alt={movieDetails.original_title}
			/>

			<h3>
				User Score:{' '}
				{movieDetails.vote_average
					? Math.fround(movieDetails.vote_average * 10).toFixed(
							0
					  )
					: ''}
				%
			</h3>
			<h3>Overview</h3>
			<p>{movieDetails.overview}</p>

			<h3>Genres</h3>
			<p>
				{movieDetails.genres
					? movieDetails.genres
							.map(genre => genre.name)
							.join(' ')
					: ''}
			</p>

			<p>Additional information</p>

			<ul>
				<li>
					<Link to="cast" state={{ from: location.state.from }}>
						Cast
					</Link>
				</li>
				<li>
					<Link
						to="reviews"
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
