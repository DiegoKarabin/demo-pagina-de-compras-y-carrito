import styles from './styles.module.scss';

export const ProductButtonsContainer = () => (
  <>
    <div className={styles.buttonsContainer}>
      <button className={`${styles.addCartButton} text-uppercase`}>Añadir al carrito</button>
      <i className={`bi bi-heart-fill ${styles.addFavoritesButton}`}></i>
    </div>
  </>
);
