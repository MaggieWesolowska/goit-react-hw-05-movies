import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout.jsx';

const HomePage = lazy(() =>
	import('../pages/HomePage.jsx')
);
const MovieDetailsPage = lazy(() =>
	import('../pages/MovieDetailsPage')
);
const MoviePage = lazy(() => import('../pages/MoviePage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Cast = lazy(() => import('./Cast/Cast.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));

const App = () => {
	return (
		<div
			style={{
				padding: '40px',
			}}>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<HomePage />} />
					<Route path="movies" element={<MoviePage />} />
					<Route
						path="movies/:movieId"
						element={<MovieDetailsPage />}>
						<Route path="cast" element={<Cast />} />
						<Route path="reviews" element={<Reviews />} />
					</Route>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
