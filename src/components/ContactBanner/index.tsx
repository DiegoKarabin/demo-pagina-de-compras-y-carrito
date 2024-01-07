import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { ContainerFluid } from '../ContainerFluid';
import { Container } from '../Container';

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
