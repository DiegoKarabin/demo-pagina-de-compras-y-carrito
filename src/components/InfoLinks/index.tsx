import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { ActionInput } from '../ActionInput';
import { FooterInfoTitle } from '../FooterInfoTitle';
import { ContainerFluid } from '../ContainerFluid';
import { Container } from '../Container';

export const InfoLinks = () => (
  <>
    <ContainerFluid className={styles.infoLinksSection}>
      <Container className={styles.infoLinksContainer}>
        <div className={styles.infoLinksListContainer}>
          <FooterInfoTitle className={styles.infoLinksListTitle}>
            Servicio al cliente
          </FooterInfoTitle>
          <ul className={styles.infoLinksList}>
            <li>
              <Link to="#" className={`text-uppercase`}>
                Contáctenos
              </Link>
            </li>
            <li>
              <Link to="#" className={`text-uppercase`}>
                Cambios y devoluciones
              </Link>
            </li>
            <li>
              <Link to="#" className={`text-uppercase`}>
                Políticas de la tienda
              </Link>
            </li>
            <li>
              <Link to="#" className={`text-uppercase`}>
                Políticas de datos
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.infoLinksListContainer}>
          <FooterInfoTitle className={styles.infoLinksListTitle}>
            Mi cuenta
          </FooterInfoTitle>
          <ul className={styles.infoLinksList}>
            <li>
              <Link to="#" className={`text-uppercase`}>
                Mis pedidos
              </Link>
            </li>
            <li>
              <Link to="#" className={`text-uppercase`}>
                Mis devoluciones
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.infoLinksListContainer}>
          <FooterInfoTitle className={styles.infoLinksListTitle}>
            Recursos
          </FooterInfoTitle>
          <ul className={styles.infoLinksList}>
            <li>
              <Link to="#" className={`text-uppercase`}>
                Tiendas
              </Link>
            </li>
            <li>
              <Link to="#" className={`text-uppercase`}>
                Devoluciones
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.newsletterFormContainer}>
          <FooterInfoTitle className={styles.newsletterFormTitle}>Newsletter</FooterInfoTitle>
          <p>
            Regístrate para ser el primero en recibir nuestras noticias
          </p>
          <ActionInput placeholder="e-mail" className={styles.newsletterEmailInput} />
        </div>
      </Container>
    </ContainerFluid>
  </>
);
