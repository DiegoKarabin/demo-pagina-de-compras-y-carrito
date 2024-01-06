import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const Navbar = () => (
  <>
    <div className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li>
          <Link to="/categories/men" className={styles.navbarLink}>
            Hombre
          </Link>
        </li>

        <li>
          <Link to="/categories/women" className={styles.navbarLink}>
            Mujer
          </Link>
        </li>

        <li className={styles.cartListItem}>
          <Link to="/cart" className={styles.navbarLink}>
            <i className={`bi bi-bag ${styles.cartIcon}`}></i>
            Carrito
            0
          </Link>
        </li>
      </ul>
    </div>
  </>
)
