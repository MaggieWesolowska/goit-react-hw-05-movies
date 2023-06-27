import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TrendingList = ({ movies }) => {
	const location = useLocation();
	return (
		<div>
			<ul>
				{movies.map(movie => (
					<li key={movie.id}>
						<Link
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
