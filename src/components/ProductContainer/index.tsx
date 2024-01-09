import { ActionsSection } from '../ActionsSection';
import { ProductPicturesViewer } from '../ProductPicturesViewer';
import styles from './styles.module.scss';

interface Props {
  name: string;
  code: string;
  image: string;
  price: number;
}
export const ProductContainer = ({ name, code, image, price }: Props) => {
  const imageUrl = `/img/${image}`;
  const sizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];

  return (
    <>
      <div className={styles.productContainerMainGrid}>
        <ProductPicturesViewer
          productName={name}
          imagesUrls={[imageUrl]}
          bordered
        />
        <ActionsSection
          productName={name}
          code={code}
          colorsImagesUrls={[imageUrl]}
          price={price}
          sizes={sizes}
        />
      </div>
    </>
  );
}
