import { Container } from 'src/components/Container';
import { ContainerFluid } from 'src/components/ContainerFluid';
import styles from 'src/components/PromoBanner/styles.module.scss';

export const PromoBanner = () => (
  <>
    <ContainerFluid className={styles.promoBanner}>
      <Container>
        <p>Hot sale -30% en sandalias</p>
      </Container>
    </ContainerFluid>
  </>
)
