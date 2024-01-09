import styles from 'src/components/ActionInput/styles.module.scss';

interface Props {
  placeholder: string;
  className?: string;
}
export const ActionInput = ({ placeholder, className }: Props) => (
  <>
    <div className={`${className ?? ''} ${styles.inputContainer}`}>
      <input type="text" placeholder={placeholder} />
      <span className={styles.iconContainer}>
        <i className="bi bi-chevron-right"></i>
      </span>
    </div>
  </>
);
