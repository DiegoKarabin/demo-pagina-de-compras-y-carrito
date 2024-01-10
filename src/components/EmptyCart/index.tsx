import styles from 'src/components/EmptyCart/styles.module.scss';

export const EmptyCart = () => (
  <div className={styles.cartEmpty}>
    <p>Tu carrito de compras está vacío.</p>
  </div>
);
