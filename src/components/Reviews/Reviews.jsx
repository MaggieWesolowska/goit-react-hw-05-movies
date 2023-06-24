import { useParams } from 'react-router-dom';
import { useMovieReviews } from '../../utils/hooks/useMovieReviews';

const Reviews = () => {
	const { movieId } = useParams();
	const { movieReviews } = useMovieReviews(movieId);

	return (
		<div>
			{movieReviews?.length === 0 && (
				<p>We don't have any reviews for this movie yet</p>
			)}
			<ul>
				{movieReviews.map(review => {
					return (
						<li key={review.id}>
							<p>Author: {review.author}</p>
							<p>{review.content}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Reviews;
