import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'src/store';
import styles from 'src/components/Navbar/styles.module.scss';
import { CartProduct } from 'src/types';

export const Navbar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.products);
  const cartItemsCount = cartItems.reduce(
    (total, cartProduct: CartProduct) => total + cartProduct.quantity,
    0
  );

  return (
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
              <span className={styles.cartItemsCount}>
                {cartItemsCount}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
