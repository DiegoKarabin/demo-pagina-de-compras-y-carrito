import { Link } from 'react-router-dom';
import { ContainerFluid } from 'src/components/ContainerFluid';
import { Container } from 'src/components/Container';
import styles from 'src/components/SocialNetworks/styles.module.scss';

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
