import { BrandAndSearchForm } from '../BrandAndSearchForm';
import { Navbar } from '../Navbar';
import styles from './styles.module.scss';

export const Navigation = () => (
  <>
    <div className={`container-fluid ${styles.navigation}`}>
      <div className="container">
        <BrandAndSearchForm />
        <Navbar />
      </div>
    </div>
  </>
)
