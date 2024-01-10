import { CartProduct } from 'src/types';
import { COPFormater, imageUrlFormatter } from 'src/utils';
import styles from 'src/components/CartItem/styles.module.scss';
import { useDispatch } from 'react-redux';
import { decrementExistingProduct, incrementExistingProduct, removeCartProduct } from 'src/features/cart/cartSlice';

interface Props {
  cartProduct: CartProduct;
}
export const CartItem = ({ cartProduct }: Props) => {
  const {
    size,
    product: { foto, nombre, precio },
    quantity,
  } = cartProduct;
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrementExistingProduct(cartProduct));
  };

  const handleIncrement = () => {
    dispatch(incrementExistingProduct(cartProduct));
  }

  const handleRemoveCartProduct = () => {
    dispatch(removeCartProduct(cartProduct));
  }

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartProduct}>
        <img src={imageUrlFormatter(foto)} alt={`${nombre} picture`} />
        <div>
          <h3>
            {nombre}
          </h3>
          <button onClick={handleRemoveCartProduct}>Quitar</button>
        </div>
      </div>
      <div className={styles.cartItemSize}>
        {size}
      </div>
      <div className={styles.cartItemPrice}>
        {COPFormater.format(precio)}
      </div>
      <div className={styles.cartItemQuantity}>
        <button onClick={handleDecrement}>-</button>
        <div className={styles.count}>
          {quantity}
        </div>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div className={styles.cartItemTotalPrice}>
        {COPFormater.format(precio * quantity)}
      </div>
    </div>
  );
}
