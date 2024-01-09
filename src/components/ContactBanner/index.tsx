import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { ContainerFluid } from 'src/components/ContainerFluid';
import { Container } from 'src/components/Container';

export const ContactBanner = () => (
  <>
    <ContainerFluid className={styles.contactBanner}>
      <Container>
        <ul>
          <li>
            <Link to="#">
              Directorio de tiendas
            </Link>
          </li>
          <li>
            <Link to="#">
              Servicio al cliente
            </Link>
          </li>
          <li>
            <Link to="#">
              Mi cuenta
            </Link>
          </li>
        </ul>
      </Container>
    </ContainerFluid>
  </>
)
