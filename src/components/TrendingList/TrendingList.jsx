import { useLocation } from 'react-router-dom';

const TrendingList = ({ movies }) => {
	const location = useLocation();
	return (
		<div>
			<ul>
				{movies.map(movie => (
					<li key={movie.id}>
						<link
							to={`/movies/${movie.id}`}
							state={{ from: location }}>
							{movie.title}
						</link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TrendingList;
