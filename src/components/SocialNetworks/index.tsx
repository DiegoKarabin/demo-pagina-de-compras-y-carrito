import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { ContainerFluid } from '../ContainerFluid';
import { Container } from '../Container';

export const SocialNetworks = () => (
  <>
    <ContainerFluid className={styles.socialNetworksSection}>
      <Container className={styles.socialNetworksContainer}>
        <p className={`${styles.instagramUsername} text-uppercase`}>@hushpuppiesco</p>
        <div className={styles.divider}></div>
        <div className={styles.socialNetworksLinks}>
          <Link to="#" className={styles.socialNetworksLinkItem}>
            <i className="bi bi-facebook"></i>
          </Link>
          <Link to="#" className={styles.socialNetworksLinkItem}>
            <i className="bi bi-instagram"></i>
          </Link>
        </div>
      </Container>
    </ContainerFluid>
  </>
);
