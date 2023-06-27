import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import css from './SharedLayout.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
	color: black;
	&.active {
		color: orange;
	}
`;

const SharedLayout = () => {
	return (
		<div className="css.container">
			<header className="css.header">
				<nav>
					<StyledLink className={css.link} to="/" end>
						Home
					</StyledLink>
					<StyledLink className={css.link} to="/movies">
						Movies
					</StyledLink>
				</nav>
			</header>
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
		</div>
	);
};

export default SharedLayout;
