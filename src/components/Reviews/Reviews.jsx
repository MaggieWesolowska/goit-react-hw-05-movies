import { useParams } from 'react-router-dom';
import { useMovieReviews } from '../../utils/hooks/useMovieReviews';
import css from '../Reviews/Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const { movieReviews } = useMovieReviews(movieId);

  return (
    <div>
      {movieReviews?.length === 0 && (
        <h4 className={css.reviewInfo}>
          Sorry, we don't have any reviews for this movie..
        </h4>
      )}
      <p className={css.reviewsHeader}>Reviews</p>
      <ul className={css.reviews}>
        {movieReviews.map(review => {
          return (
            <li key={review.id}>
              <p className={css.reviewAuthor}>
                Author: {review.author}
              </p>
              <p className={css.reviewContent}>
                {review.content}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
