import { BrandAndSearchForm } from 'src/components/BrandAndSearchForm';
import { Container } from 'src/components/Container';
import { ContainerFluid } from 'src/components/ContainerFluid';
import { Navbar } from 'src/components/Navbar';
import styles from 'src/components/Navigation/styles.module.scss';

export const Navigation = () => (
  <>
    <ContainerFluid className={styles.navigation}>
      <Container>
        <BrandAndSearchForm />
        <Navbar />
      </Container>
    </ContainerFluid>
  </>
)
