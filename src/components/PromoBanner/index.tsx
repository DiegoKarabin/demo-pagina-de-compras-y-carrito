import { Container } from '../Container';
import { ContainerFluid } from '../ContainerFluid';
import styles from './styles.module.scss';

export const PromoBanner = () => (
  <>
    <ContainerFluid className={styles.promoBanner}>
      <Container>
        <p>Hot sale -30% en sandalias</p>
      </Container>
    </ContainerFluid>
  </>
)
