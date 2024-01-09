import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { setSelectedSize } from 'src/features/product/productSlice';
import styles from 'src/components/SizeSelector/styles.module.scss';

interface Props {
  sizes: number[];
}
export const SizeSelector = ({ sizes }: Props) => {
  const selectedSize = useSelector((state: RootState) => state.product.selectedSize);
  const tryingToAddToCart = useSelector((state: RootState) => state.product.tryingToAddToCart);
  const dispatch = useDispatch();
  const handleSelection = (size: number) => () => dispatch(setSelectedSize(size));

  return (
    <>
      <div className={styles.sizeSelector}>
        <h5>Talla</h5>
        <div className={styles.sizesGrid}>
          {sizes.map((size, index) => (
            <div
              key={index}
              className={`${styles.size} ${size === selectedSize ? styles.selectedSize : ''}`}
              onClick={handleSelection(size)}
            >{size}</div>
          ))}
        </div>
        {tryingToAddToCart && selectedSize === undefined && (
          <p className={styles.errorMessage}>* Debes seleccionar una talla antes de añadir al carrito.</p>
        )}
      </div>
    </>
  );
}
