import { ActionsSection } from '../ActionsSection';
import { ProductPicturesViewer } from '../ProductPicturesViewer';
import styles from './styles.module.scss';

export const ProductContainer = () => (
  <>
    <div className={styles.productContainerMainGrid}>
      <ProductPicturesViewer bordered />
      <ActionsSection />
    </div>
  </>
);
