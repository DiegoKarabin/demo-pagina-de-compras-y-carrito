import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { setTryingToAddToCart } from 'src/features/product/productSlice';
import { addProductToCart } from 'src/features/cart/cartSlice';
import { toast } from 'react-toastify';
import styles from 'src/components/ProductButtonsContainer/styles.module.scss';
import 'react-toastify/dist/ReactToastify.css';

export const ProductButtonsContainer = () => {
  const selectedSize = useSelector((state: RootState) => state.product.selectedSize);
  const currentProduct = useSelector((state: RootState) => state.product.currentProduct);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setTryingToAddToCart(true));

    if (selectedSize === undefined) {
      return;
    }

    dispatch(addProductToCart({ product: currentProduct!, size: selectedSize, quantity: 1 }));

    toast.success('Producto agregado al carrito');

    dispatch(setTryingToAddToCart(false));
  }

  return (
    <>
      <div className={styles.buttonsContainer}>
        <button
          className={`${styles.addCartButton} text-uppercase`}
          onClick={handleClick}
        >Añadir al carrito</button>
        <i className={`bi bi-heart-fill ${styles.addFavoritesButton}`}></i>
      </div>
    </>
  );
}
