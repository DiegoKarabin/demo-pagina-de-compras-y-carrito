import { ColorSelector } from '../ColorSelector';
import { ProductButtonsContainer } from '../ProductButtonsContainer';
import { SizeGuide } from '../SizeGuide';
import { SizeSelector } from '../SizeSelector';
import styles from './styles.module.scss';

interface Props {
  productName: string;
  code: string;
  colorsImagesUrls: string[];
  price: number;
  sizes: number[];
}
export const ActionsSection = ({ productName, code, colorsImagesUrls, price, sizes }: Props) => (
  <>
    <div className={styles.actionSection}>
      <h2 className='text-uppercase'>{productName}</h2>
      <span className={styles.price}>${price}</span>
      <p className={styles.productCode}>
        Cod. de producto {code}
      </p>
      <ColorSelector
        colorsImagesUrls={colorsImagesUrls}
        productName={productName}
      />
      <SizeSelector sizes={sizes} />
      <SizeGuide />

      <ProductButtonsContainer />
    </div>
  </>
);
