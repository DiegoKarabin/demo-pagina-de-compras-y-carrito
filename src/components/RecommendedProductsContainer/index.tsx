import { Product } from "../../types";
import { DescriptionTitle } from "../DescriptionTitle";
import { ProductsSlider } from "../ProductsSlider";
import styles from './styles.module.scss';

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
