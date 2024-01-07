import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  children: ReactNode
  className?: string;
}
export const ContainerFluid = ({ children, className }: Props) => (
  <div className={`${styles.containerFluid} ${className ?? ''}`}>{children}</div>
);
