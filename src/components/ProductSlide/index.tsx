import { Link } from 'react-router-dom';
import { COPFormater } from 'src/utils';
import styles from 'src/components/ProductSlide/style.module.scss';

interface Props {
  index: number;
  imagesUrls: string[];
  productName: string;
  price: number;
}
export const ProductSlide = ({ index, imagesUrls, productName, price }: Props) => (
  <>
    <div className={styles.productSlide}>
      <div className={styles.imageContainer}>
        <img src={imagesUrls[0]} alt={`${productName} picture`} />
      </div>
      <div className={styles.slideThumbnailsContainer}>
        {imagesUrls.map((imageUrl, index) => {
          return (
            <div key={index} className={styles.slideThumbnail}>
              <img src={imageUrl} alt={`${productName} thumbnail`} />
            </div>
          );
        })}
      </div>
      <div className={styles.productName}>
        <Link to={`/products/${index}`}>
          {productName}
        </Link>
      </div>
      <div className={styles.price}>
        <p>{COPFormater.format(price)}</p>
      </div>
      <button className={`${styles.addToCartButton} text-uppercase`}>Agregar al carrito</button>
    </div>
  </>
);
