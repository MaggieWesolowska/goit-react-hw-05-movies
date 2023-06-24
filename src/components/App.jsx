import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));

const App = () => {
	return (
		<div style={{ padding: '40px' }}>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</div>
	);
};

export default App;
