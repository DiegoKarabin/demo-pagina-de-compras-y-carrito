import { Link } from 'react-router-dom';
import styles from 'src/components/BrandAndSearchForm/styles.module.scss';
import { ActionInput } from 'src/components/ActionInput';

export const BrandAndSearchForm = () => (
  <>
    <div className={styles.brandAndSearchContainer}>
      <div className={styles.brandLogo}>
        <Link to="/">
          <img src="/img/logo-2.png" alt="Hush puppies logo" />
        </Link>
      </div>
      <div className={styles.searchContainer}>
        <ActionInput placeholder="Buscar" />
        <p className={styles.promoText}>
          Envío gratis para pedidos superiores a $300.000
        </p>
      </div>
    </div>
  </>
)
