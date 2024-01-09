import styles from './style.module.scss';

interface Props {
  imagesUrls: string[];
  productName: string;
  price: number;
}
export const ProductSlide = ({ imagesUrls, productName, price }: Props) => (
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
        <p>{productName}</p>
      </div>
      <div className={styles.price}>
        <p>${price}</p>
      </div>
      <button className={`${styles.addToCartButton} text-uppercase`}>Agregar al carrito</button>
    </div>
  </>
);
