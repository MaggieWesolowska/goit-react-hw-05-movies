import { useTrendingList } from '../../utils/hooks/useTrendingList';
import TrendingList from '../../components/TrendingList/TrendingList';
import css from '../HomePage/HomePage.module.css';

const HomePage = () => {
  const { trendingMovies } = useTrendingList();
  return (
    <div>
      <h3 className={css.homeHeader}>Trending Today</h3>
      <TrendingList movies={trendingMovies}></TrendingList>
      <div className={css.homeFooter}>Made by MW 2023'</div>
    </div>
  );
};

export default HomePage;
