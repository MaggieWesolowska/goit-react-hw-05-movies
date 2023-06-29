import { Dna } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => (
  <div className={css.loader}>
    <Dna
      visible={true}
      height='100'
      width='100'
      ariaLabel='dna-loading'
      wrapperStyle={{}}
      wrapperClass='dna-wrapper'
    />
  </div>
);

export default Loader;
