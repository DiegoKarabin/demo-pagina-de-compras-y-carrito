import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const ContactBanner = () => (
  <>
    <div className={`container-fluid ${styles.contactBanner}`}>
      <div className="container">
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
      </div>
    </div>
  </>
)
