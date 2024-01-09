import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CompleteYourLookContainer } from '../../components/CompleteYourLookContainer';
import { Container } from '../../components/Container';
import { ContainerFluid } from '../../components/ContainerFluid';
import { ProductContainer } from '../../components/ProductContainer';
import { DescriptionContainer } from '../../components/DescriptionContainer';
import { RecommendedProductsContainer } from '../../components/RecommendedProductsContainer';
import styles from './styles.module.scss';
import products from '../../data/zapato.json';

export const Product = () => {
  const { nombre, precio, referencia, foto } = products[0];
  const productDetails = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint illum nulla aliquid repellendus doloremque similique minus fuga, hic ipsa, nisi praesentium nam sequi dolor voluptate quos. Ipsum ab architecto saepe, ducimus laudantium iure sint sed fuga reiciendis itaque repellat, obcaecati dolorem quia qui molestiae, nam similique maiores? Consequatur cumque temporibus nam doloremque est veritatis ducimus voluptatem vitae unde. Asperiores nostrum explicabo aliquid quasi, labore illum voluptas similique ipsa iure cumque a deserunt vel, unde enim consectetur ab repudiandae dolorum in quam illo adipisci. Iste omnis explicabo recusandae, rem libero quisquam fuga rerum voluptatum inventore sit repellat praesentium ex molestias dicta?';
  const productTechnology = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt labore et quos optio. Dicta repellendus iusto quis ab. Sint qui iure sequi adipisci laboriosam similique commodi eum necessitatibus beatae voluptas.'

  return (
    <ContainerFluid>
      <Container className={styles.productContainer}>
        <Breadcrumbs
          items={['hushpuppiesco', 'calzado', nombre]}
          separator="/"
        />
        <ProductContainer
          name={nombre}
          code={referencia}
          image={foto}
          price={precio}
        />
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
      </Container>
    </ContainerFluid>
  );
};
