import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { imageUrlFormatter } from 'src/utils';
import styles from 'src/components/ProductPicturesViewer/styles.module.scss';

interface Props {
  bordered?: boolean;
}
export const ProductPicturesViewer = ({ bordered }: Props) => {
  const thumbnailsClassNames = `${styles.thumbnails} ${bordered ? styles.bordered : ''}`;
  const currentProduct = useSelector((state: RootState) => state.product.currentProduct);
  const productName = currentProduct?.nombre;
  const imagesUrls = [imageUrlFormatter(String(currentProduct?.foto))]

  return (
    <>
      <div className={styles.productPicturesViewer}>
        <div className={styles.pictureContainer}>
          <img src={imagesUrls[0]} alt={`${productName} picture`} />
        </div>
        <div className={thumbnailsClassNames}>
          {imagesUrls.map((imageUrl, index) => (
            <div key={index} className={styles.thumbnailContainer}>
              <img src={imageUrl} alt={`${productName} thumbnail`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
