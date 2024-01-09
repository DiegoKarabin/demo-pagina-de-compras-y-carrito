import styles from './styles.module.scss';

interface Props {
  title: string;
}
export const DescriptionTitle = ({ title }: Props) => (
  <>
    <h3 className={`${styles.title} text-uppercase`}>{title}</h3>
  </>
)
