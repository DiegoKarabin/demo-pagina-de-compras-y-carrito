import { ActionsSection } from 'src/components/ActionsSection';
import { ProductPicturesViewer } from 'src/components/ProductPicturesViewer';
import styles from 'src/components/ProductContainer/styles.module.scss';

export const ProductContainer = () => (
  <>
    <div className={styles.productContainerMainGrid}>
      <ProductPicturesViewer bordered />
      <ActionsSection />
    </div>
  </>
);
