import { useParams } from 'react-router-dom';
import { useMovieCredits } from '../../utils/hooks/useMovieCredits';
import placeholder from '../images/placeholder.png';

const Cast = () => {
	const { movieId } = useParams();
	const { movieCredits } = useMovieCredits(movieId);

	return (
		<>
			<ul>
				{movieCredits.map(cast => {
					return (
						<li key={cast.id}>
							<img
								width={150}
								src={
									cast.profile_path
										? `https://image.tmdb.org/t/p/w300/${cast.profile_path}`
										: `${placeholder}`
								}
								alt={cast.name}></img>
							<p>{cast.name}</p>
							<p>Character: {cast.character}</p>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Cast;
