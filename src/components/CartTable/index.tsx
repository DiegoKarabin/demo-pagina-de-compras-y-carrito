import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { CartProduct } from 'src/types';
import { COPFormater } from 'src/utils';
import styles from 'src/components/CartTable/styles.module.scss';
import { CartItem } from '../CartItem';
import { emptyCart } from 'src/features/cart/cartSlice';

export const CartTable = () => {
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const subtotal = cartProducts.reduce(
    (subtotal: number, { product: { precio }, quantity }: CartProduct) => subtotal + precio * quantity,
    0
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(emptyCart());
  }

  return (
    <>
      <div className={styles.cartTable}>
        <div className={styles.tableHeaders}>
          <h3 className={styles.productHeader}>Producto</h3>
          <h3 className={styles.sizeHeader}>Talla</h3>
          <h3 className={styles.priceHeader}>Precio</h3>
          <h3 className={styles.quantityHeader}>Cantidad</h3>
          <h3 className={styles.totalHeader}>Total</h3>
        </div>
        <div>
          {cartProducts?.map((cartProduct: CartProduct, index: number) => (
            <CartItem key={index} cartProduct={cartProduct} />
          ))}
        </div>
        <div className={styles.cartSummary}>
          <button
            className={styles.clearCart}
            onClick={handleClick}
          >
            Vaciar carrito
          </button>
          <div className={styles.cartCheckout}>
            <div className={styles.subtotal}>
              <span>Subtotal</span>
              <span className={styles.amount}>
                {COPFormater.format(subtotal)}
              </span>
            </div>
            <p>Impuestos y costos de envío serán calculados al proceder con la compra</p>
            <button>Proceder con la compra</button>
          </div>
        </div>
      </div>
    </>
  );
};
