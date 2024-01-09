import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { ColorSelector } from 'src/components/ColorSelector';
import { ProductButtonsContainer } from 'src/components/ProductButtonsContainer';
import { SizeGuide } from 'src/components/SizeGuide';
import { SizeSelector } from 'src/components/SizeSelector';
import styles from 'src/components/ActionsSection/styles.module.scss';
import { COPFormater, imageUrlFormatter } from 'src/utils';

export const ActionsSection = () => {
  const sizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];
  const currentProduct = useSelector((state: RootState) => state.product.currentProduct);
  const productName = String(currentProduct?.nombre);
  const price = Number(currentProduct?.precio);
  const code = currentProduct?.referencia;
  const colorsImagesUrls = [imageUrlFormatter(String(currentProduct?.foto))];

  return (
    <>
      <div className={styles.actionSection}>
        <h2 className='text-uppercase'>{productName}</h2>
        <span className={styles.price}>{COPFormater.format(price)}</span>
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
}
