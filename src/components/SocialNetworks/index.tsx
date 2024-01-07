import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const SocialNetworks = () => (
  <>
    <div className={`container-fluid ${styles.socialNetworksSection}`}>
      <div className={`container ${styles.socialNetworksContainer}`}>
        <p className={styles.instagramUsername}>@hushpuppiesco</p>
        <div className={styles.divider}></div>
        <div className={styles.socialNetworksLinks}>
          <Link to="#" className={styles.socialNetworksLinkItem}>
            <i className="bi bi-facebook"></i>
          </Link>
          <Link to="#" className={styles.socialNetworksLinkItem}>
            <i className="bi bi-instagram"></i>
          </Link>
        </div>
      </div>
    </div>
  </>
);
