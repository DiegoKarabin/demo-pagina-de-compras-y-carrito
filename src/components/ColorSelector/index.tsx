import styles from './styles.module.scss';

interface Props {
  colorsImagesUrls: string[];
  productName: string;
}
export const ColorSelector = ({ colorsImagesUrls, productName }: Props) => (
  <>
    <div className={styles.colorSelector}>
      <h5>Color</h5>
      <div className={styles.colorsGrid}>
        <img src={colorsImagesUrls[0]} alt={`${productName} color variation`}/>
      </div>
    </div>
  </>
);
