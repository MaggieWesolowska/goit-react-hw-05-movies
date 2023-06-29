import { useParams } from 'react-router-dom';
import { useMovieCredits } from '../../utils/hooks/useMovieCredits';
import placeholder from '../../Assets/Images/placeholder.jpg';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const { movieCredits } = useMovieCredits(movieId);

  return (
    <>
      <p className={css.cast}>Movie Cast</p>
      <ul className={css.castGallery}>
        {movieCredits.map(cast => {
          return (
            <li className={css.actorCard} key={cast.id}>
              <img
                className={css.castImg}
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w300${cast.profile_path}`
                    : `${placeholder}`
                }
                alt={cast.name}></img>
              <p className={css.castInfo}>{cast.name}</p>
              <p className={css.castName}>
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
