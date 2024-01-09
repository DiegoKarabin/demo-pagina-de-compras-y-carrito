import { Product } from 'src/types';
import { ProductsSlider } from 'src/components/ProductsSlider';
import styles from 'src/components/CompleteYourLookContainer/styles.module.scss';

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
