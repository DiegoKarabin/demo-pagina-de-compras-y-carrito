import { Product } from "src/types";
import { DescriptionTitle } from "src/components/DescriptionTitle";
import { ProductsSlider } from "src/components/ProductsSlider";
import styles from 'src/components/RecommendedProductsContainer/styles.module.scss';

interface Props {
  products: Product[];
}
export const RecommendedProductsContainer = ({ products }: Props) => (
  <>
    <div className={styles.recommendedProductsContainer}>
      <DescriptionTitle title="Productos recomendados" />
      <ProductsSlider products={products} />
    </div>
  </>
)
