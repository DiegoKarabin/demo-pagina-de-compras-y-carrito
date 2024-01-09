import { DescriptionTitle } from 'src/components/DescriptionTitle';
import styles from 'src/components/DescriptionContainer/styles.module.scss';

interface Props {
  title: string;
  description: string;
}
export const DescriptionContainer = ({ title, description }: Props) => (
  <>
    <div className={styles.descriptionContainer}>
      <DescriptionTitle title={title} />
      <p className={styles.description}>{description}</p>
    </div>
  </>
);
