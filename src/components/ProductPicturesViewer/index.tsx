import styles from './styles.module.scss';

interface Props {
  imagesUrls: string[];
  productName: string;
  bordered?: boolean;
}
export const ProductPicturesViewer = ({ imagesUrls, productName, bordered }: Props) => {
  const thumbnailsClassNames = `${styles.thumbnails} ${bordered ? styles.bordered : ''}`;

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
