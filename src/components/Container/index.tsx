import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
}
export const Container = ({ children, className}: Props) => (
  <div className={`${styles.container} ${className ?? ''}`}>{children}</div>
)
