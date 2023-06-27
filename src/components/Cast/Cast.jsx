import { useParams } from 'react-router-dom';
import { useMovieCredits } from '../../utils/hooks/useMovieCredits';
import placeholder from '../images/placeholder.png';
import css from './Cast.module.css';

const Cast = () => {
	const { movieId } = useParams();
	const { movieCredits } = useMovieCredits(movieId);

	return (
		<>
			<ul className={css.cast}>
				Movie Cast
				{movieCredits.map(cast => {
					return (
						<li className={css.actorCard} key={cast.id}>
							<img
								width={200}
								src={
									cast.profile_path
										? `https://image.tmdb.org/t/p/w300${cast.profile_path}`
										: `${placeholder}`
								}
								alt={cast.name}></img>
							<p className={css.castInfo}>{cast.name}</p>
							<p className={css.castInfo}>
								Character: {cast.character}
							</p>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Cast;
