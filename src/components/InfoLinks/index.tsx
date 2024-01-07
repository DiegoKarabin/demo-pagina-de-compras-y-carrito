import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { ActionInput } from '../ActionInput';

export const InfoLinks = () => (
  <>
    <div className={`container-fluid ${styles.infoLinksSection}`}>
      <div className={`container ${styles.infoLinksContainer}`}>
        <div className={styles.infoLinksListContainer}>
          <h4 className={`text-uppercase ${styles.infoLinksListTitle}`}>
            Servicio al cliente
          </h4>
          <ul className={styles.infoLinksList}>
            <li>
              <Link to="#" className={`text-uppercase ${styles.infoLink}`}>
                Contáctenos
              </Link>
            </li>
            <li>
              <Link to="#" className={`text-uppercase ${styles.infoLink}`}>
                Cambios y devoluciones
              </Link>
            </li>
            <li>
              <Link to="#" className={`text-uppercase ${styles.infoLink}`}>
                Políticas de la tienda
              </Link>
            </li>
            <li>
              <Link to="#" className={`text-uppercase ${styles.infoLink}`}>
                Políticas de datos
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.infoLinksListContainer}>
          <h4 className={`text-uppercase ${styles.infoLinksListTitle}`}>
            Mi cuenta
          </h4>
          <ul className={styles.infoLinksList}>
            <li>
              <Link to="#" className={`text-uppercase ${styles.infoLink}`}>
                Mis pedidos
              </Link>
            </li>
            <li>
              <Link to="#" className={`text-uppercase ${styles.infoLink}`}>
                Mis devoluciones
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.infoLinksListContainer}>
          <h4 className={`text-uppercase ${styles.infoLinksListTitle}`}>
            Recursos
          </h4>
          <ul className={styles.infoLinksList}>
            <li>
              <Link to="#" className={`text-uppercase ${styles.infoLink}`}>
                Tiendas
              </Link>
            </li>
            <li>
              <Link to="#" className={`text-uppercase ${styles.infoLink}`}>
                Devoluciones
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.newsletterFormContainer}>
          <h4 className={`text-uppercase ${styles.newsletterFormTitle}`}>
            Newsletter
          </h4>
          <p>
            Regístrate para ser el primero en recibir nuestras noticias
          </p>
          <ActionInput placeholder="e-mail" className={styles.newsletterEmailInput} />
        </div>
      </div>
    </div>
  </>
);
