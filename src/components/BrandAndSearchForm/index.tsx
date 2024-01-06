import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const BrandAndSearchForm = () => (
  <>
    <div className={styles.brandAndSearchContainer}>
      <div className={styles.brandLogo}>
        <Link to="/">
          <img src="/img/logo-2.png" alt="Hush puppies logo" />
        </Link>
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Buscar" />
          <span className={styles.iconContainer}>
            <i className="bi bi-chevron-right"></i>
          </span>
        </div>
        <p className={styles.promoText}>
          Envío gratis para pedidos superiores a $300.000
        </p>
      </div>
    </div>
  </>
)
