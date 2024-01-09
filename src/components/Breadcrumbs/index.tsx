import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  items: ReactNode[];
  separator: ReactNode;
}
export const Breadcrumbs = ({ items, separator }: Props) => (
  <div className={`${styles.breadcrumbs} text-uppercase`}>
    {items.map((item, index) => (
      <span key={index}>
        {item}
        {index < items.length - 1 && separator}
      </span>
    ))}
  </div>
)
