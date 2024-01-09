import { Product } from '../../types';
import { ProductsSlider } from '../ProductsSlider';
import styles from './styles.module.scss';

interface Props {
  products: Product[];
}
export const CompleteYourLookContainer = ({ products }: Props) => (
  <>
    <div className={styles.completeYourLookContainer}>
      <h3 className="text-uppercase">Completa tu look</h3>
      <ProductsSlider products={products} />
    </div>
  </>
);
