import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TrendingList from '../TrendingList/TrendingList';
import * as API from '../../utils/api/apiMoviedb';
import css from '../SearchMovie/SearchMovie.module.css';

const SearchMovie = () => {
	const [movies, setMovies] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();

	const handleSubmit = e => {
		setSearchParams({ query: e.target[0].value });
		e.preventDefault();
		return;
	};

	useEffect(() => {
		const movieTitle = searchParams.get('query');
		if (movieTitle) {
			API.searchMovies(movieTitle).then(ret => setMovies(ret));
		}
	}, [searchParams]);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className={css.search}
					type="text"
					placeholder="Search movie..."></input>
				<button className={css.searchBtn} type="submit">
					Go
				</button>
			</form>
			<TrendingList movies={movies}></TrendingList>
		</div>
	);
};

export default SearchMovie;
