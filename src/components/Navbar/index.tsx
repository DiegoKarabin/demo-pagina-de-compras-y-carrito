import { Link } from 'react-router-dom';
import styles from 'src/components/Navbar/styles.module.scss';

export const Navbar = () => (
  <>
    <div className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li>
          <Link to="#" className={styles.navbarLink}>
            Hombre
          </Link>
        </li>

        <li>
          <Link to="#" className={styles.navbarLink}>
            Mujer
          </Link>
        </li>

        <li>
          <Link to="#" className={styles.navbarLink}>
            Blog
          </Link>
        </li>

        <li>
          <Link to="#" className={styles.navbarLink}>
            Historia
          </Link>
        </li>

        <li>
          <Link to="#" className={styles.navbarLink}>
            Tienda
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
