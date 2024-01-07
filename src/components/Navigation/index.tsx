import { BrandAndSearchForm } from '../BrandAndSearchForm';
import { Container } from '../Container';
import { ContainerFluid } from '../ContainerFluid';
import { Navbar } from '../Navbar';
import styles from './styles.module.scss';

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
