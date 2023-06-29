import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage')
);
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails.jsx')
);
const Movies = lazy(() =>
  import('../pages/Movies/Movies.jsx')
);
const NotFound = lazy(() =>
  import('../pages/NotFound/NotFound.jsx')
);
const Cast = lazy(() => import('./Cast/Cast.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));

export const App = () => {
  return (
    <div
      style={{
        padding: '40px',
      }}>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path='movies' element={<Movies />} />
          <Route
            path='movies/:movieId'
            element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
