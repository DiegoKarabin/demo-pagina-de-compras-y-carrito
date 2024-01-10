import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from 'src/store';
import { setCurrentProduct } from 'src/features/product/productSlice';
import { Breadcrumbs } from 'src/components/Breadcrumbs';
import { CompleteYourLookContainer } from 'src/components/CompleteYourLookContainer';
import { Container } from 'src/components/Container';
import { ContainerFluid } from 'src/components/ContainerFluid';
import { ProductContainer } from 'src/components/ProductContainer';
import { DescriptionContainer } from 'src/components/DescriptionContainer';
import { RecommendedProductsContainer } from 'src/components/RecommendedProductsContainer';
import styles from 'src/pages/Product/styles.module.scss';
import products from 'src/data/zapato.json';
import { ProductNotFound } from 'src/components/ProductNotFound';

export const Product = () => {
  const productDetails = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint illum nulla aliquid repellendus doloremque similique minus fuga, hic ipsa, nisi praesentium nam sequi dolor voluptate quos. Ipsum ab architecto saepe, ducimus laudantium iure sint sed fuga reiciendis itaque repellat, obcaecati dolorem quia qui molestiae, nam similique maiores? Consequatur cumque temporibus nam doloremque est veritatis ducimus voluptatem vitae unde. Asperiores nostrum explicabo aliquid quasi, labore illum voluptas similique ipsa iure cumque a deserunt vel, unde enim consectetur ab repudiandae dolorum in quam illo adipisci. Iste omnis explicabo recusandae, rem libero quisquam fuga rerum voluptatum inventore sit repellat praesentium ex molestias dicta?';
  const productTechnology = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt labore et quos optio. Dicta repellendus iusto quis ab. Sint qui iure sequi adipisci laboriosam similique commodi eum necessitatibus beatae voluptas.'

  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.product.currentProduct);

  useEffect(() => {
    const numberProductId = Number(productId);
    const product = products.find(({ id }) => id === numberProductId);

    if (product) {
      dispatch(setCurrentProduct(product));
    }
  }, [dispatch, productId]);

  return (
    <ContainerFluid>
      <Container className={styles.productContainer}>
        {product ? (
          <>
            <Breadcrumbs
              items={['hushpuppiesco', 'calzado', product?.nombre ?? '']}
              separator="/"
            />
            <ProductContainer />
            <DescriptionContainer
              title="Detalles de producto"
              description={productDetails}
            />
            <DescriptionContainer
              title="Tecnología"
              description={productTechnology}
            />
            <CompleteYourLookContainer products={products} />
            <RecommendedProductsContainer products={products} />
          </>
        ) : (
          <ProductNotFound />
        )}

      </Container>
    </ContainerFluid>
  );
};
