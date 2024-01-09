import { ReactNode } from 'react';
import styles from 'src/components/Container/styles.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
}
export const Container = ({ children, className}: Props) => (
  <div className={`${styles.container} ${className ?? ''}`}>{children}</div>
)
