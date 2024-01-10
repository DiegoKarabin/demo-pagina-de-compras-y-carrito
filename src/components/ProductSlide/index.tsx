import { Link } from 'react-router-dom';
import { COPFormater } from 'src/utils';
import styles from 'src/components/ProductSlide/style.module.scss';

interface Props {
  productId: number;
  imagesUrls: string[];
  productName: string;
  price: number;
}
export const ProductSlide = ({ productId, imagesUrls, productName, price }: Props) => (
  <>
    <div className={styles.productSlide}>
      <div className={styles.imageContainer}>
        <img src={imagesUrls[0]} alt={`${productName} picture`} />
      </div>
      <div className={styles.slideThumbnailsContainer}>
        {imagesUrls.map((imageUrl, productId) => {
          return (
            <div key={productId} className={styles.slideThumbnail}>
              <img src={imageUrl} alt={`${productName} thumbnail`} />
            </div>
          );
        })}
      </div>
      <div className={styles.productName}>
        <Link to={`/products/${productId}`}>
          {productName}
        </Link>
      </div>
      <div className={styles.price}>
        <p>{COPFormater.format(price)}</p>
      </div>
      <Link to={`/products/${productId}`} className={`${styles.addToCartButton} text-uppercase`}>
        Ver producto
      </Link>
    </div>
  </>
);
