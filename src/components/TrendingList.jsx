import { useLocation } from 'react-router-dom';

export default TrendingList = ({ movies }) => {
	const location = useLocation();
	return (
		<>
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
		</>
	);
};
